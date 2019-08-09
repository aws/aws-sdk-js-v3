import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AcceptMatch } from "../model/AcceptMatch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptMatchInput } from "../types/AcceptMatchInput";
import { AcceptMatchOutput } from "../types/AcceptMatchOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/AcceptMatchInput";
export * from "../types/AcceptMatchOutput";
export * from "../types/AcceptMatchExceptionsUnion";

export class AcceptMatchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptMatchInput,
      OutputTypesUnion,
      AcceptMatchOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AcceptMatch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptMatchInput,
    AcceptMatchOutput,
    _stream.Readable
  >();

  constructor(readonly input: AcceptMatchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<AcceptMatchInput, AcceptMatchOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AcceptMatchInput, AcceptMatchOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
