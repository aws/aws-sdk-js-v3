import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InvokeEndpoint } from "../model/operations/InvokeEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InvokeEndpointInput } from "../types/InvokeEndpointInput";
import { InvokeEndpointOutput } from "../types/InvokeEndpointOutput";
import { SageMakerRuntimeResolvedConfiguration } from "../SageMakerRuntimeConfiguration";
export * from "../types/InvokeEndpointInput";
export * from "../types/InvokeEndpointOutput";
export * from "../types/InvokeEndpointExceptionsUnion";

export class InvokeEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InvokeEndpointInput,
      OutputTypesUnion,
      InvokeEndpointOutput,
      SageMakerRuntimeResolvedConfiguration,
      Blob
    > {
  readonly model = InvokeEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InvokeEndpointInput,
    InvokeEndpointOutput,
    Blob
  >();

  constructor(readonly input: InvokeEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerRuntimeResolvedConfiguration
  ): __aws_sdk_types.Handler<InvokeEndpointInput, InvokeEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<InvokeEndpointInput, InvokeEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
