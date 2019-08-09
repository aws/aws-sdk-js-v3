import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteUser } from "../model/DeleteUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUserInput } from "../types/DeleteUserInput";
import { DeleteUserOutput } from "../types/DeleteUserOutput";
import { QuickSightResolvedConfiguration } from "../QuickSightConfiguration";
export * from "../types/DeleteUserInput";
export * from "../types/DeleteUserOutput";
export * from "../types/DeleteUserExceptionsUnion";

export class DeleteUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUserInput,
      OutputTypesUnion,
      DeleteUserOutput,
      QuickSightResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUserInput,
    DeleteUserOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: QuickSightResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteUserInput, DeleteUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteUserInput, DeleteUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
