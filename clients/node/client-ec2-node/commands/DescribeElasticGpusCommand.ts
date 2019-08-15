import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeElasticGpus } from "../model/operations/DescribeElasticGpus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeElasticGpusInput } from "../types/DescribeElasticGpusInput";
import { DescribeElasticGpusOutput } from "../types/DescribeElasticGpusOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeElasticGpusInput";
export * from "../types/DescribeElasticGpusOutput";
export * from "../types/DescribeElasticGpusExceptionsUnion";

export class DescribeElasticGpusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeElasticGpusInput,
      OutputTypesUnion,
      DescribeElasticGpusOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeElasticGpus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeElasticGpusInput,
    DescribeElasticGpusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeElasticGpusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeElasticGpusInput,
    DescribeElasticGpusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeElasticGpusInput, DescribeElasticGpusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
