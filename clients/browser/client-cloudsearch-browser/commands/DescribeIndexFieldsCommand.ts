import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeIndexFields } from "../model/operations/DescribeIndexFields";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeIndexFieldsInput } from "../types/DescribeIndexFieldsInput";
import { DescribeIndexFieldsOutput } from "../types/DescribeIndexFieldsOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DescribeIndexFieldsInput";
export * from "../types/DescribeIndexFieldsOutput";
export * from "../types/DescribeIndexFieldsExceptionsUnion";

export class DescribeIndexFieldsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeIndexFieldsInput,
      OutputTypesUnion,
      DescribeIndexFieldsOutput,
      CloudSearchResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeIndexFields;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeIndexFieldsInput,
    DescribeIndexFieldsOutput,
    Blob
  >();

  constructor(readonly input: DescribeIndexFieldsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeIndexFieldsInput,
    DescribeIndexFieldsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeIndexFieldsInput, DescribeIndexFieldsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
