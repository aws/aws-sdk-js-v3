import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDataset } from "../model/operations/DescribeDataset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDatasetInput } from "../types/DescribeDatasetInput";
import { DescribeDatasetOutput } from "../types/DescribeDatasetOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/DescribeDatasetInput";
export * from "../types/DescribeDatasetOutput";
export * from "../types/DescribeDatasetExceptionsUnion";

export class DescribeDatasetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDatasetInput,
      OutputTypesUnion,
      DescribeDatasetOutput,
      CognitoSyncResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDataset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDatasetInput,
    DescribeDatasetOutput,
    Blob
  >();

  constructor(readonly input: DescribeDatasetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeDatasetInput, DescribeDatasetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDatasetInput, DescribeDatasetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
