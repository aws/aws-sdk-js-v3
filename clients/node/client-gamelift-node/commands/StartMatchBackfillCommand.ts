import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartMatchBackfill } from "../model/StartMatchBackfill";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartMatchBackfillInput } from "../types/StartMatchBackfillInput";
import { StartMatchBackfillOutput } from "../types/StartMatchBackfillOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/StartMatchBackfillInput";
export * from "../types/StartMatchBackfillOutput";
export * from "../types/StartMatchBackfillExceptionsUnion";

export class StartMatchBackfillCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartMatchBackfillInput,
      OutputTypesUnion,
      StartMatchBackfillOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartMatchBackfill;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartMatchBackfillInput,
    StartMatchBackfillOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartMatchBackfillInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartMatchBackfillInput,
    StartMatchBackfillOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartMatchBackfillInput, StartMatchBackfillOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
