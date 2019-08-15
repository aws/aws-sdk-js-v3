import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeRecord } from "../model/operations/DescribeRecord";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRecordInput } from "../types/DescribeRecordInput";
import { DescribeRecordOutput } from "../types/DescribeRecordOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeRecordInput";
export * from "../types/DescribeRecordOutput";
export * from "../types/DescribeRecordExceptionsUnion";

export class DescribeRecordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRecordInput,
      OutputTypesUnion,
      DescribeRecordOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeRecord;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRecordInput,
    DescribeRecordOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeRecordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeRecordInput, DescribeRecordOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRecordInput, DescribeRecordOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
