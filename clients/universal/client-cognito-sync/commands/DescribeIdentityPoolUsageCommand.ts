import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeIdentityPoolUsage } from "../model/DescribeIdentityPoolUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeIdentityPoolUsageInput } from "../types/DescribeIdentityPoolUsageInput";
import { DescribeIdentityPoolUsageOutput } from "../types/DescribeIdentityPoolUsageOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/DescribeIdentityPoolUsageInput";
export * from "../types/DescribeIdentityPoolUsageOutput";
export * from "../types/DescribeIdentityPoolUsageExceptionsUnion";

export class DescribeIdentityPoolUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeIdentityPoolUsageInput,
      OutputTypesUnion,
      DescribeIdentityPoolUsageOutput,
      CognitoSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeIdentityPoolUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeIdentityPoolUsageInput,
    DescribeIdentityPoolUsageOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeIdentityPoolUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeIdentityPoolUsageInput,
    DescribeIdentityPoolUsageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeIdentityPoolUsageInput, DescribeIdentityPoolUsageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
