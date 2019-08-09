import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEngineDefaultParameters } from "../model/DescribeEngineDefaultParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEngineDefaultParametersInput } from "../types/DescribeEngineDefaultParametersInput";
import { DescribeEngineDefaultParametersOutput } from "../types/DescribeEngineDefaultParametersOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/DescribeEngineDefaultParametersInput";
export * from "../types/DescribeEngineDefaultParametersOutput";
export * from "../types/DescribeEngineDefaultParametersExceptionsUnion";

export class DescribeEngineDefaultParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEngineDefaultParametersInput,
      OutputTypesUnion,
      DescribeEngineDefaultParametersOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEngineDefaultParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEngineDefaultParametersInput,
    DescribeEngineDefaultParametersOutput,
    Blob
  >();

  constructor(readonly input: DescribeEngineDefaultParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEngineDefaultParametersInput,
    DescribeEngineDefaultParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEngineDefaultParametersInput,
        DescribeEngineDefaultParametersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
