import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeIdentityIdFormat } from "../model/DescribeIdentityIdFormat";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeIdentityIdFormatInput } from "../types/DescribeIdentityIdFormatInput";
import { DescribeIdentityIdFormatOutput } from "../types/DescribeIdentityIdFormatOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeIdentityIdFormatInput";
export * from "../types/DescribeIdentityIdFormatOutput";
export * from "../types/DescribeIdentityIdFormatExceptionsUnion";

export class DescribeIdentityIdFormatCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeIdentityIdFormatInput,
      OutputTypesUnion,
      DescribeIdentityIdFormatOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeIdentityIdFormat;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeIdentityIdFormatInput,
    DescribeIdentityIdFormatOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeIdentityIdFormatInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeIdentityIdFormatInput,
    DescribeIdentityIdFormatOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeIdentityIdFormatInput, DescribeIdentityIdFormatOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
