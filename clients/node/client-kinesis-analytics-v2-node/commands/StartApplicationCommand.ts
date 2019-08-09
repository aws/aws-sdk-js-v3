import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartApplication } from "../model/StartApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartApplicationInput } from "../types/StartApplicationInput";
import { StartApplicationOutput } from "../types/StartApplicationOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/StartApplicationInput";
export * from "../types/StartApplicationOutput";
export * from "../types/StartApplicationExceptionsUnion";

export class StartApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartApplicationInput,
      OutputTypesUnion,
      StartApplicationOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartApplicationInput,
    StartApplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<StartApplicationInput, StartApplicationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartApplicationInput, StartApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
