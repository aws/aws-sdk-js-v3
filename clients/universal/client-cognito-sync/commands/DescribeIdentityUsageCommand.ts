import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeIdentityUsage } from "../model/DescribeIdentityUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeIdentityUsageInput } from "../types/DescribeIdentityUsageInput";
import { DescribeIdentityUsageOutput } from "../types/DescribeIdentityUsageOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/DescribeIdentityUsageInput";
export * from "../types/DescribeIdentityUsageOutput";
export * from "../types/DescribeIdentityUsageExceptionsUnion";

export class DescribeIdentityUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeIdentityUsageInput,
      OutputTypesUnion,
      DescribeIdentityUsageOutput,
      CognitoSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeIdentityUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeIdentityUsageInput,
    DescribeIdentityUsageOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeIdentityUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeIdentityUsageInput,
    DescribeIdentityUsageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeIdentityUsageInput, DescribeIdentityUsageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
