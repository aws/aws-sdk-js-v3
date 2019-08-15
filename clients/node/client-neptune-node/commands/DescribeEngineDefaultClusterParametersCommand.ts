import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEngineDefaultClusterParameters } from "../model/operations/DescribeEngineDefaultClusterParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEngineDefaultClusterParametersInput } from "../types/DescribeEngineDefaultClusterParametersInput";
import { DescribeEngineDefaultClusterParametersOutput } from "../types/DescribeEngineDefaultClusterParametersOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/DescribeEngineDefaultClusterParametersInput";
export * from "../types/DescribeEngineDefaultClusterParametersOutput";
export * from "../types/DescribeEngineDefaultClusterParametersExceptionsUnion";

export class DescribeEngineDefaultClusterParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEngineDefaultClusterParametersInput,
      OutputTypesUnion,
      DescribeEngineDefaultClusterParametersOutput,
      NeptuneResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEngineDefaultClusterParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEngineDefaultClusterParametersInput,
    DescribeEngineDefaultClusterParametersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEngineDefaultClusterParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEngineDefaultClusterParametersInput,
    DescribeEngineDefaultClusterParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeEngineDefaultClusterParametersInput,
        DescribeEngineDefaultClusterParametersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
