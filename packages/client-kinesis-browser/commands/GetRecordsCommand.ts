import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRecords } from "../model/GetRecords";
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
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRecordsInput,
    GetRecordsOutput,
    Blob
  >();

  constructor(readonly input: GetRecordsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRecordsInput, GetRecordsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: GetRecords
    };

    return stack.resolve(
      handler<GetRecordsInput, GetRecordsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
