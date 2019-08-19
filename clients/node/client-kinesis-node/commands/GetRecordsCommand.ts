import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRecords } from "../model/operations/GetRecords";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRecordsInput } from "../types/GetRecordsInput";
import { GetRecordsOutput } from "../types/GetRecordsOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/GetRecordsInput";
export * from "../types/GetRecordsOutput";
export * from "../types/GetRecordsExceptionsUnion";

export class GetRecordsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRecordsInput,
      OutputTypesUnion,
      GetRecordsOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRecords;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRecordsInput,
    GetRecordsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRecordsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRecordsInput, GetRecordsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRecordsInput, GetRecordsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
