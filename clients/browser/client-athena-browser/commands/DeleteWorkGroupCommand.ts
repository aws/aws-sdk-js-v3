import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteWorkGroup } from "../model/operations/DeleteWorkGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteWorkGroupInput } from "../types/DeleteWorkGroupInput";
import { DeleteWorkGroupOutput } from "../types/DeleteWorkGroupOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/DeleteWorkGroupInput";
export * from "../types/DeleteWorkGroupOutput";
export * from "../types/DeleteWorkGroupExceptionsUnion";

export class DeleteWorkGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteWorkGroupInput,
      OutputTypesUnion,
      DeleteWorkGroupOutput,
      AthenaResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteWorkGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteWorkGroupInput,
    DeleteWorkGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteWorkGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteWorkGroupInput, DeleteWorkGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteWorkGroupInput, DeleteWorkGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
