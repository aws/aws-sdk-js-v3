import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDatasetImportJob } from "../model/DescribeDatasetImportJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDatasetImportJobInput } from "../types/DescribeDatasetImportJobInput";
import { DescribeDatasetImportJobOutput } from "../types/DescribeDatasetImportJobOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DescribeDatasetImportJobInput";
export * from "../types/DescribeDatasetImportJobOutput";
export * from "../types/DescribeDatasetImportJobExceptionsUnion";

export class DescribeDatasetImportJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDatasetImportJobInput,
      OutputTypesUnion,
      DescribeDatasetImportJobOutput,
      PersonalizeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeDatasetImportJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDatasetImportJobInput,
    DescribeDatasetImportJobOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeDatasetImportJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDatasetImportJobInput,
    DescribeDatasetImportJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDatasetImportJobInput, DescribeDatasetImportJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
