import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEndpointGroup } from "../model/operations/DeleteEndpointGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEndpointGroupInput } from "../types/DeleteEndpointGroupInput";
import { DeleteEndpointGroupOutput } from "../types/DeleteEndpointGroupOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/DeleteEndpointGroupInput";
export * from "../types/DeleteEndpointGroupOutput";
export * from "../types/DeleteEndpointGroupExceptionsUnion";

export class DeleteEndpointGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEndpointGroupInput,
      OutputTypesUnion,
      DeleteEndpointGroupOutput,
      GlobalAcceleratorResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteEndpointGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEndpointGroupInput,
    DeleteEndpointGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteEndpointGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEndpointGroupInput,
    DeleteEndpointGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEndpointGroupInput, DeleteEndpointGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
