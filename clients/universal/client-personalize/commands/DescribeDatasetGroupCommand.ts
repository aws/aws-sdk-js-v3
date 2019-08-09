import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDatasetGroup } from "../model/DescribeDatasetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDatasetGroupInput } from "../types/DescribeDatasetGroupInput";
import { DescribeDatasetGroupOutput } from "../types/DescribeDatasetGroupOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DescribeDatasetGroupInput";
export * from "../types/DescribeDatasetGroupOutput";
export * from "../types/DescribeDatasetGroupExceptionsUnion";

export class DescribeDatasetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDatasetGroupInput,
      OutputTypesUnion,
      DescribeDatasetGroupOutput,
      PersonalizeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeDatasetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDatasetGroupInput,
    DescribeDatasetGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeDatasetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDatasetGroupInput,
    DescribeDatasetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDatasetGroupInput, DescribeDatasetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
