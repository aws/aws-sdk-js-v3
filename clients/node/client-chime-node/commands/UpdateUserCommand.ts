import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateUser } from "../model/operations/UpdateUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUserInput } from "../types/UpdateUserInput";
import { UpdateUserOutput } from "../types/UpdateUserOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/UpdateUserInput";
export * from "../types/UpdateUserOutput";
export * from "../types/UpdateUserExceptionsUnion";

export class UpdateUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUserInput,
      OutputTypesUnion,
      UpdateUserOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserInput,
    UpdateUserOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateUserInput, UpdateUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUserInput, UpdateUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
