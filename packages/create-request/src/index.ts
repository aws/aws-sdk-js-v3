import {
  CommandInput,
  FinalizeHandler,
  FinalizeHandlerArguments,
  HttpRequest,
  OperationModel
} from "@aws-sdk/types";
import { MiddlewareStack } from "@aws-sdk/middleware-stack";

interface ServiceClientLike {
  middlewareStack: MiddlewareStack<any, any, any>;
}

interface CommandLike {
  input: any;
  model: OperationModel;
  middlewareStack: MiddlewareStack<any, any, any>;
}

export async function createRequest<Stream = Uint8Array>(
  client: ServiceClientLike,
  command: CommandLike
): Promise<HttpRequest<Stream>> {
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
    model: command.model,
    logger: {} as any
  });
  return await handler(command);
}
