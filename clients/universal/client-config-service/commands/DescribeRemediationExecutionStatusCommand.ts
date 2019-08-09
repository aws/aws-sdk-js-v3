import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRemediationExecutionStatus } from "../model/DescribeRemediationExecutionStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRemediationExecutionStatusInput } from "../types/DescribeRemediationExecutionStatusInput";
import { DescribeRemediationExecutionStatusOutput } from "../types/DescribeRemediationExecutionStatusOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeRemediationExecutionStatusInput";
export * from "../types/DescribeRemediationExecutionStatusOutput";
export * from "../types/DescribeRemediationExecutionStatusExceptionsUnion";

export class DescribeRemediationExecutionStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRemediationExecutionStatusInput,
      OutputTypesUnion,
      DescribeRemediationExecutionStatusOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeRemediationExecutionStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRemediationExecutionStatusInput,
    DescribeRemediationExecutionStatusOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeRemediationExecutionStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRemediationExecutionStatusInput,
    DescribeRemediationExecutionStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeRemediationExecutionStatusInput,
        DescribeRemediationExecutionStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
