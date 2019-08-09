import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopRelationalDatabase } from "../model/StopRelationalDatabase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopRelationalDatabaseInput } from "../types/StopRelationalDatabaseInput";
import { StopRelationalDatabaseOutput } from "../types/StopRelationalDatabaseOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/StopRelationalDatabaseInput";
export * from "../types/StopRelationalDatabaseOutput";
export * from "../types/StopRelationalDatabaseExceptionsUnion";

export class StopRelationalDatabaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopRelationalDatabaseInput,
      OutputTypesUnion,
      StopRelationalDatabaseOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopRelationalDatabase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopRelationalDatabaseInput,
    StopRelationalDatabaseOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopRelationalDatabaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopRelationalDatabaseInput,
    StopRelationalDatabaseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopRelationalDatabaseInput, StopRelationalDatabaseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
