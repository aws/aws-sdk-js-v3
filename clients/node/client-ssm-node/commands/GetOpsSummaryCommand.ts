import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetOpsSummary } from "../model/operations/GetOpsSummary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOpsSummaryInput } from "../types/GetOpsSummaryInput";
import { GetOpsSummaryOutput } from "../types/GetOpsSummaryOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetOpsSummaryInput";
export * from "../types/GetOpsSummaryOutput";
export * from "../types/GetOpsSummaryExceptionsUnion";

export class GetOpsSummaryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOpsSummaryInput,
      OutputTypesUnion,
      GetOpsSummaryOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetOpsSummary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOpsSummaryInput,
    GetOpsSummaryOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetOpsSummaryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetOpsSummaryInput, GetOpsSummaryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetOpsSummaryInput, GetOpsSummaryOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
