import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteMountTarget } from "../model/operations/DeleteMountTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMountTargetInput } from "../types/DeleteMountTargetInput";
import { DeleteMountTargetOutput } from "../types/DeleteMountTargetOutput";
import { EFSResolvedConfiguration } from "../EFSConfiguration";
export * from "../types/DeleteMountTargetInput";
export * from "../types/DeleteMountTargetOutput";
export * from "../types/DeleteMountTargetExceptionsUnion";

export class DeleteMountTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMountTargetInput,
      OutputTypesUnion,
      DeleteMountTargetOutput,
      EFSResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteMountTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMountTargetInput,
    DeleteMountTargetOutput,
    Blob
  >();

  constructor(readonly input: DeleteMountTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EFSResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteMountTargetInput, DeleteMountTargetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMountTargetInput, DeleteMountTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
