import { memoize } from "@aws-sdk/property-provider";
import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import {
  AuthScheme,
  AwsCredentialIdentity,
  Credentials,
  HashConstructor,
  Identity,
  IdentityProvider,
  Logger,
  MemoizedProvider,
  Provider,
  RegionInfo,
  RegionInfoProvider,
  RequestSigner,
  Token,
  TokenProvider,
} from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";


// 5 minutes buffer time the refresh the credential before it really expires
export const CREDENTIAL_EXPIRE_WINDOW = 300000;

// AwsAuth v/s SigV4Auth
// AwsAuth: specific to SigV4 auth for AWS services
// SigV4Auth: SigV4 auth for non-AWS services

/*
interface PreviouslyResolved {
  credentialDefaultProvider: (input: any) => MemoizedProvider<AwsCredentialIdentity>;
  region: string | Provider<string>;
  regionInfoProvider?: RegionInfoProvider;
  signingName?: string;
  defaultSigningName?: string;
  serviceId: string;
  sha256: HashConstructor;
  useFipsEndpoint: Provider<boolean>;
  useDualstackEndpoint: Provider<boolean>;
}

interface SigV4PreviouslyResolved {
  credentialDefaultProvider: (input: any) => MemoizedProvider<AwsCredentialIdentity>;
  region: string | Provider<string>;
  signingName: string;
  sha256: HashConstructor;
  logger?: Logger;
}
*/

// export interface AwsAuthResolvedConfig {
//   /**
//    * Resolved value for input config {@link AwsAuthInputConfig.credentials}
//    * This provider MAY memoize the loaded credentials for certain period.
//    * See {@link MemoizedProvider} for more information.
//    */
//   credentials: MemoizedProvider<AwsCredentialIdentity>;
//   /**
//    * Resolved value for input config {@link AwsAuthInputConfig.signer}
//    */
//   signer: (authScheme?: AuthScheme) => Promise<RequestSigner>;
//   /**
//    * Resolved value for input config {@link AwsAuthInputConfig.signingEscapePath}
//    */
//   signingEscapePath: boolean;
//   /**
//    * Resolved value for input config {@link AwsAuthInputConfig.systemClockOffset}
//    */
//   systemClockOffset: number;
// }
// 
// export interface SigV4AuthResolvedConfig extends AwsAuthResolvedConfig {}

// middleware-identity/src/configurations.ts
export interface IdentityInputConfig {
  // Signer will be discussed in later section.

  /**
   * @deprecated Use {@link identity}
   */
  credentials?: Credentials | Provider<Credentials>;

  /**
   * @deprecated Use {@link identity}
   */
  token?: Token | TokenProvider;

  /**
   * A representation of who is using the SDK client.
   */
  identity?: Identity | IdentityProvider<Identity>;
}

export interface IdentityPreviouslyResolved {
  // The section on AuthScheme will discuss how Provider will be made available.
  authScheme: AuthScheme;
}

export interface IdentityResolvedConfig {
  /**
   * Resolved value for input config {@link IdentityInputConfig.identity}
   */
  identity: IdentityProvider<Identity>;
}
