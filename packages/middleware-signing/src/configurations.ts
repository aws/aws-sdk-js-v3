import {
  RequestSigner,
  Credentials,
  Provider,
  HashConstructor,
  Injectable
} from "@aws-sdk/types";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { signingMiddleware } from "./middleware";

export namespace AwsAuth {
  export interface Input {
    /**
     * The credentials used to sign requests.
     */
    credentials?: Credentials | Provider<Credentials>;

    /**
     * The signer to use when signing requests.
     */
    signer?: RequestSigner;

    /**
     * Whether to escape request path when signing the request
     */
    signingEscapePath?: boolean;
  }
  interface PreviouslyResolved {
    credentialDefaultProvider: (input: any) => Provider<Credentials>;
    region: string | Provider<string>;
    signingName: string;
    sha256: HashConstructor;
  }
  export interface Resolved {
    credentials: Provider<Credentials>;
    signer: RequestSigner;
    signingEscapePath: boolean;
  }
  export function resolve<T>(
    input: T & Input & PreviouslyResolved
  ): T & Resolved {
    let credentials =
      input.credentials || input.credentialDefaultProvider(input as any);
    const normalizedCreds = normalizeProvider(credentials);
    const signingEscapePath = input.signingEscapePath || false;
    return {
      ...input,
      signingEscapePath,
      credentials: normalizedCreds,
      signer: new SignatureV4({
        credentials: normalizedCreds,
        region: input.region,
        service: input.signingName,
        sha256: input.sha256,
        uriEscapePath: signingEscapePath
      })
    };
  }

  export const getMiddleware = (
    options: AwsAuth.Resolved
  ): Injectable<any, any> => clientStack => {
    clientStack.add(signingMiddleware(options), {
      step: "finalizeRequest",
      tags: { SIGNATURE: true }
    });
  };
}

//export separately for showing comment block in Intellisense
export type AwsAuthInput = AwsAuth.Input;

function normalizeProvider<T>(input: T | Provider<T>): Provider<T> {
  if (typeof input === "object") {
    const promisified = Promise.resolve(input);
    return () => promisified;
  }
  return input as Provider<T>;
}
