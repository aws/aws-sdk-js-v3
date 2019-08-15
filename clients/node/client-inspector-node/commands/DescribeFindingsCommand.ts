import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeFindings } from "../model/operations/DescribeFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFindingsInput } from "../types/DescribeFindingsInput";
import { DescribeFindingsOutput } from "../types/DescribeFindingsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/DescribeFindingsInput";
export * from "../types/DescribeFindingsOutput";
export * from "../types/DescribeFindingsExceptionsUnion";

export class DescribeFindingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFindingsInput,
      OutputTypesUnion,
      DescribeFindingsOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFindingsInput,
    DescribeFindingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeFindingsInput, DescribeFindingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFindingsInput, DescribeFindingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
