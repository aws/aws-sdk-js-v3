import {
  CommandInput,
  FinalizeHandler,
  FinalizeHandlerArguments,
  Provider,
  Credentials,
  HashConstructor,
  HttpRequest
} from "@aws-sdk/types";
import { MiddlewareStack } from "@aws-sdk/middleware-stack";

interface ServiceClientLike {
  middlewareStack: MiddlewareStack<any, any, any>;
  config: {
    signingName: string;
    region: string | Provider<string>;
    credentials: Credentials | Provider<Credentials>;
    sha256: HashConstructor;
  };
}

interface CommandLike {
  input: any;
  middlewareStack: MiddlewareStack<any, any, any>;
}

export async function createRequest(
  client: ServiceClientLike,
  command: CommandLike
): Promise<HttpRequest> {
  const presignHandler: FinalizeHandler<
    CommandInput,
    HttpRequest,
    any
  > = async (
    args: FinalizeHandlerArguments<CommandInput>
  ): Promise<HttpRequest> => {
    return Promise.resolve(args.request);
  };

  const clientStack = client.middlewareStack.clone() as MiddlewareStack<
    any,
    any,
    any
  >;
  const commandStack = command.middlewareStack.clone() as MiddlewareStack<
    any,
    any,
    any
  >;
  const concatenatedStack = commandStack
    .concat(clientStack)
    .filter(middlewareStats => {
      return (
        middlewareStats.step === "initialize" ||
        middlewareStats.step === "serialize"
      );
    });

  const handler = concatenatedStack.resolve(presignHandler, {
    model: (command as any).model as any,
    logger: {} as any
  });
  return await handler(command);
}
