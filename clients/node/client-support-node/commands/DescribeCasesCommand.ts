import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCases } from "../model/DescribeCases";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCasesInput } from "../types/DescribeCasesInput";
import { DescribeCasesOutput } from "../types/DescribeCasesOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/DescribeCasesInput";
export * from "../types/DescribeCasesOutput";
export * from "../types/DescribeCasesExceptionsUnion";

export class DescribeCasesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCasesInput,
      OutputTypesUnion,
      DescribeCasesOutput,
      SupportResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCases;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCasesInput,
    DescribeCasesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCasesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeCasesInput, DescribeCasesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCasesInput, DescribeCasesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
