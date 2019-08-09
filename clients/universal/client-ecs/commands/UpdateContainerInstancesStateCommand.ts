import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateContainerInstancesState } from "../model/UpdateContainerInstancesState";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateContainerInstancesStateInput } from "../types/UpdateContainerInstancesStateInput";
import { UpdateContainerInstancesStateOutput } from "../types/UpdateContainerInstancesStateOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/UpdateContainerInstancesStateInput";
export * from "../types/UpdateContainerInstancesStateOutput";
export * from "../types/UpdateContainerInstancesStateExceptionsUnion";

export class UpdateContainerInstancesStateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateContainerInstancesStateInput,
      OutputTypesUnion,
      UpdateContainerInstancesStateOutput,
      ECSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateContainerInstancesState;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateContainerInstancesStateInput,
    UpdateContainerInstancesStateOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateContainerInstancesStateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateContainerInstancesStateInput,
    UpdateContainerInstancesStateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateContainerInstancesStateInput,
        UpdateContainerInstancesStateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
