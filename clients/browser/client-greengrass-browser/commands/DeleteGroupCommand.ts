import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteGroup } from "../model/DeleteGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGroupInput } from "../types/DeleteGroupInput";
import { DeleteGroupOutput } from "../types/DeleteGroupOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/DeleteGroupInput";
export * from "../types/DeleteGroupOutput";
export * from "../types/DeleteGroupExceptionsUnion";

export class DeleteGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGroupInput,
      OutputTypesUnion,
      DeleteGroupOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGroupInput,
    DeleteGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteGroupInput, DeleteGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGroupInput, DeleteGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
