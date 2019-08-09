import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBEngineVersions } from "../model/DescribeDBEngineVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBEngineVersionsInput } from "../types/DescribeDBEngineVersionsInput";
import { DescribeDBEngineVersionsOutput } from "../types/DescribeDBEngineVersionsOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/DescribeDBEngineVersionsInput";
export * from "../types/DescribeDBEngineVersionsOutput";
export * from "../types/DescribeDBEngineVersionsExceptionsUnion";

export class DescribeDBEngineVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBEngineVersionsInput,
      OutputTypesUnion,
      DescribeDBEngineVersionsOutput,
      NeptuneResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDBEngineVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBEngineVersionsInput,
    DescribeDBEngineVersionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeDBEngineVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBEngineVersionsInput,
    DescribeDBEngineVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDBEngineVersionsInput, DescribeDBEngineVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
