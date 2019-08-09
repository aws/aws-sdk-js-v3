import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeletePlacementGroup } from "../model/DeletePlacementGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePlacementGroupInput } from "../types/DeletePlacementGroupInput";
import { DeletePlacementGroupOutput } from "../types/DeletePlacementGroupOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeletePlacementGroupInput";
export * from "../types/DeletePlacementGroupOutput";
export * from "../types/DeletePlacementGroupExceptionsUnion";

export class DeletePlacementGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePlacementGroupInput,
      OutputTypesUnion,
      DeletePlacementGroupOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeletePlacementGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePlacementGroupInput,
    DeletePlacementGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: DeletePlacementGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePlacementGroupInput,
    DeletePlacementGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePlacementGroupInput, DeletePlacementGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
