import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdatePlacement } from "../model/UpdatePlacement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePlacementInput } from "../types/UpdatePlacementInput";
import { UpdatePlacementOutput } from "../types/UpdatePlacementOutput";
import { IoT1ClickProjectsResolvedConfiguration } from "../IoT1ClickProjectsConfiguration";
export * from "../types/UpdatePlacementInput";
export * from "../types/UpdatePlacementOutput";
export * from "../types/UpdatePlacementExceptionsUnion";

export class UpdatePlacementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePlacementInput,
      OutputTypesUnion,
      UpdatePlacementOutput,
      IoT1ClickProjectsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdatePlacement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePlacementInput,
    UpdatePlacementOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdatePlacementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoT1ClickProjectsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdatePlacementInput, UpdatePlacementOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePlacementInput, UpdatePlacementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
