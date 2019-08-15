import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePlatformEndpoint } from "../model/operations/CreatePlatformEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePlatformEndpointInput } from "../types/CreatePlatformEndpointInput";
import { CreatePlatformEndpointOutput } from "../types/CreatePlatformEndpointOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/CreatePlatformEndpointInput";
export * from "../types/CreatePlatformEndpointOutput";
export * from "../types/CreatePlatformEndpointExceptionsUnion";

export class CreatePlatformEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePlatformEndpointInput,
      OutputTypesUnion,
      CreatePlatformEndpointOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePlatformEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePlatformEndpointInput,
    CreatePlatformEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePlatformEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePlatformEndpointInput,
    CreatePlatformEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePlatformEndpointInput, CreatePlatformEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
