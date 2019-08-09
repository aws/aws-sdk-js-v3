import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RequestUploadCredentials } from "../model/RequestUploadCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RequestUploadCredentialsInput } from "../types/RequestUploadCredentialsInput";
import { RequestUploadCredentialsOutput } from "../types/RequestUploadCredentialsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/RequestUploadCredentialsInput";
export * from "../types/RequestUploadCredentialsOutput";
export * from "../types/RequestUploadCredentialsExceptionsUnion";

export class RequestUploadCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RequestUploadCredentialsInput,
      OutputTypesUnion,
      RequestUploadCredentialsOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RequestUploadCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RequestUploadCredentialsInput,
    RequestUploadCredentialsOutput,
    Uint8Array
  >();

  constructor(readonly input: RequestUploadCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RequestUploadCredentialsInput,
    RequestUploadCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RequestUploadCredentialsInput, RequestUploadCredentialsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
