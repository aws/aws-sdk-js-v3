import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeletePlacement } from "../model/operations/DeletePlacement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePlacementInput } from "../types/DeletePlacementInput";
import { DeletePlacementOutput } from "../types/DeletePlacementOutput";
import { IoT1ClickProjectsResolvedConfiguration } from "../IoT1ClickProjectsConfiguration";
export * from "../types/DeletePlacementInput";
export * from "../types/DeletePlacementOutput";
export * from "../types/DeletePlacementExceptionsUnion";

export class DeletePlacementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePlacementInput,
      OutputTypesUnion,
      DeletePlacementOutput,
      IoT1ClickProjectsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeletePlacement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePlacementInput,
    DeletePlacementOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePlacementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoT1ClickProjectsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeletePlacementInput, DeletePlacementOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePlacementInput, DeletePlacementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
