import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRealtimeEndpoint } from "../model/CreateRealtimeEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRealtimeEndpointInput } from "../types/CreateRealtimeEndpointInput";
import { CreateRealtimeEndpointOutput } from "../types/CreateRealtimeEndpointOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/CreateRealtimeEndpointInput";
export * from "../types/CreateRealtimeEndpointOutput";
export * from "../types/CreateRealtimeEndpointExceptionsUnion";

export class CreateRealtimeEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRealtimeEndpointInput,
      OutputTypesUnion,
      CreateRealtimeEndpointOutput,
      MachineLearningResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRealtimeEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRealtimeEndpointInput,
    CreateRealtimeEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRealtimeEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateRealtimeEndpointInput,
    CreateRealtimeEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRealtimeEndpointInput, CreateRealtimeEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
