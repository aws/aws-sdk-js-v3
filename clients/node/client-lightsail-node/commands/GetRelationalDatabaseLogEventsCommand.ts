import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRelationalDatabaseLogEvents } from "../model/operations/GetRelationalDatabaseLogEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRelationalDatabaseLogEventsInput } from "../types/GetRelationalDatabaseLogEventsInput";
import { GetRelationalDatabaseLogEventsOutput } from "../types/GetRelationalDatabaseLogEventsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRelationalDatabaseLogEventsInput";
export * from "../types/GetRelationalDatabaseLogEventsOutput";
export * from "../types/GetRelationalDatabaseLogEventsExceptionsUnion";

export class GetRelationalDatabaseLogEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRelationalDatabaseLogEventsInput,
      OutputTypesUnion,
      GetRelationalDatabaseLogEventsOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRelationalDatabaseLogEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabaseLogEventsInput,
    GetRelationalDatabaseLogEventsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRelationalDatabaseLogEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRelationalDatabaseLogEventsInput,
    GetRelationalDatabaseLogEventsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRelationalDatabaseLogEventsInput,
        GetRelationalDatabaseLogEventsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
