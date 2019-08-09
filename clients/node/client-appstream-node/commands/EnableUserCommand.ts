import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableUser } from "../model/EnableUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableUserInput } from "../types/EnableUserInput";
import { EnableUserOutput } from "../types/EnableUserOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/EnableUserInput";
export * from "../types/EnableUserOutput";
export * from "../types/EnableUserExceptionsUnion";

export class EnableUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableUserInput,
      OutputTypesUnion,
      EnableUserOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableUserInput,
    EnableUserOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableUserInput, EnableUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableUserInput, EnableUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
