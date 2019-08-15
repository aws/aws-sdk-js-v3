import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDBClusterParameters } from "../model/operations/DescribeDBClusterParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBClusterParametersInput } from "../types/DescribeDBClusterParametersInput";
import { DescribeDBClusterParametersOutput } from "../types/DescribeDBClusterParametersOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/DescribeDBClusterParametersInput";
export * from "../types/DescribeDBClusterParametersOutput";
export * from "../types/DescribeDBClusterParametersExceptionsUnion";

export class DescribeDBClusterParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBClusterParametersInput,
      OutputTypesUnion,
      DescribeDBClusterParametersOutput,
      NeptuneResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDBClusterParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBClusterParametersInput,
    DescribeDBClusterParametersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDBClusterParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBClusterParametersInput,
    DescribeDBClusterParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDBClusterParametersInput,
        DescribeDBClusterParametersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
