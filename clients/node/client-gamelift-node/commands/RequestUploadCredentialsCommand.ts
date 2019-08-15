import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RequestUploadCredentials } from "../model/operations/RequestUploadCredentials";
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
      _stream.Readable
    > {
  readonly model = RequestUploadCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RequestUploadCredentialsInput,
    RequestUploadCredentialsOutput,
    _stream.Readable
  >();

  constructor(readonly input: RequestUploadCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
