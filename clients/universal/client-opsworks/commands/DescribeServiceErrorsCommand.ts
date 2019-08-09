import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeServiceErrors } from "../model/DescribeServiceErrors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeServiceErrorsInput } from "../types/DescribeServiceErrorsInput";
import { DescribeServiceErrorsOutput } from "../types/DescribeServiceErrorsOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeServiceErrorsInput";
export * from "../types/DescribeServiceErrorsOutput";
export * from "../types/DescribeServiceErrorsExceptionsUnion";

export class DescribeServiceErrorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeServiceErrorsInput,
      OutputTypesUnion,
      DescribeServiceErrorsOutput,
      OpsWorksResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeServiceErrors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeServiceErrorsInput,
    DescribeServiceErrorsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeServiceErrorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeServiceErrorsInput,
    DescribeServiceErrorsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeServiceErrorsInput, DescribeServiceErrorsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
