import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLayers } from "../model/operations/DescribeLayers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLayersInput } from "../types/DescribeLayersInput";
import { DescribeLayersOutput } from "../types/DescribeLayersOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeLayersInput";
export * from "../types/DescribeLayersOutput";
export * from "../types/DescribeLayersExceptionsUnion";

export class DescribeLayersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLayersInput,
      OutputTypesUnion,
      DescribeLayersOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLayers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLayersInput,
    DescribeLayersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLayersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeLayersInput, DescribeLayersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLayersInput, DescribeLayersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
