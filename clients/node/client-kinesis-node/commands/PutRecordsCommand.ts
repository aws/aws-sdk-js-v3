import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutRecords } from "../model/operations/PutRecords";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRecordsInput } from "../types/PutRecordsInput";
import { PutRecordsOutput } from "../types/PutRecordsOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/PutRecordsInput";
export * from "../types/PutRecordsOutput";
export * from "../types/PutRecordsExceptionsUnion";

export class PutRecordsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRecordsInput,
      OutputTypesUnion,
      PutRecordsOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutRecords;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRecordsInput,
    PutRecordsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutRecordsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<PutRecordsInput, PutRecordsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutRecordsInput, PutRecordsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
