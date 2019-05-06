import {
  Command,
  DateInput,
  RequestSigningArguments,
  CommandInput,
  MetadataBearer,
  MiddlewareStack as IMiddlewareStack,
  Handler,
  FinalizeHandler,
  FinalizeHandlerArguments,
  Provider,
  Credentials,
  HashConstructor
} from "@aws-sdk/types";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { formatUrl } from "@aws-sdk/util-format-url";
import { MiddlewareStack } from "@aws-sdk/middleware-stack";

export interface PresignOutput {
  url: string;
}

interface ServiceClientLike {
  middlewareStack: MiddlewareStack<any, any>;
  config: {
    signingName: string;
    region: string | Provider<string>;
    credentials: Credentials | Provider<Credentials>;
    sha256: HashConstructor;
  };
}

interface CommandLike {
  middlewareStack: MiddlewareStack<any, any>;
}

export function createPresignedUrl(
  client: ServiceClientLike,
  command: CommandLike,
  expiration: DateInput,
  options?: RequestSigningArguments
): string {
  const presignHandler: FinalizeHandler<
    CommandInput,
    PresignOutput,
    any
  > = async (
    args: FinalizeHandlerArguments<CommandInput>
  ): Promise<PresignOutput> => {
    const sigV4 = new SignatureV4({
      service: client.config.signingName,
      ...client.config
    });
    const signedRequest = await sigV4.presignRequest(
      args.request,
      expiration,
      options
    );
    return Promise.resolve({
      url: formatUrl(signedRequest)
    });
  };

  const clientStack = client.middlewareStack.clone();
  const commandStack = command.middlewareStack.clone();
  const concatenatedStack = commandStack.concat(clientStack);
  concatenatedStack.filter;
  concatenatedStack.remove("SIGNATURE");

  const handler = concatenatedStack.resolve(presignHandler, { model: null });
  return await handler(command);
}
