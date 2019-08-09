import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEndpointConfig } from "../model/DeleteEndpointConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEndpointConfigInput } from "../types/DeleteEndpointConfigInput";
import { DeleteEndpointConfigOutput } from "../types/DeleteEndpointConfigOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DeleteEndpointConfigInput";
export * from "../types/DeleteEndpointConfigOutput";
export * from "../types/DeleteEndpointConfigExceptionsUnion";

export class DeleteEndpointConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEndpointConfigInput,
      OutputTypesUnion,
      DeleteEndpointConfigOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteEndpointConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEndpointConfigInput,
    DeleteEndpointConfigOutput,
    Blob
  >();

  constructor(readonly input: DeleteEndpointConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEndpointConfigInput,
    DeleteEndpointConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEndpointConfigInput, DeleteEndpointConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
