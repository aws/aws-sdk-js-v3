import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopApplication } from "../model/operations/StopApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopApplicationInput } from "../types/StopApplicationInput";
import { StopApplicationOutput } from "../types/StopApplicationOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/StopApplicationInput";
export * from "../types/StopApplicationOutput";
export * from "../types/StopApplicationExceptionsUnion";

export class StopApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopApplicationInput,
      OutputTypesUnion,
      StopApplicationOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopApplicationInput,
    StopApplicationOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<StopApplicationInput, StopApplicationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopApplicationInput, StopApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
