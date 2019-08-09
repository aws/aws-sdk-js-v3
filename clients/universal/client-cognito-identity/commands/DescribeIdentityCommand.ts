import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeIdentity } from "../model/DescribeIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeIdentityInput } from "../types/DescribeIdentityInput";
import { DescribeIdentityOutput } from "../types/DescribeIdentityOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/DescribeIdentityInput";
export * from "../types/DescribeIdentityOutput";
export * from "../types/DescribeIdentityExceptionsUnion";

export class DescribeIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeIdentityInput,
      OutputTypesUnion,
      DescribeIdentityOutput,
      CognitoIdentityResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeIdentityInput,
    DescribeIdentityOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeIdentityInput, DescribeIdentityOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeIdentityInput, DescribeIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
