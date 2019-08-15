import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTerminationPolicyTypes } from "../model/operations/DescribeTerminationPolicyTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTerminationPolicyTypesInput } from "../types/DescribeTerminationPolicyTypesInput";
import { DescribeTerminationPolicyTypesOutput } from "../types/DescribeTerminationPolicyTypesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeTerminationPolicyTypesInput";
export * from "../types/DescribeTerminationPolicyTypesOutput";
export * from "../types/DescribeTerminationPolicyTypesExceptionsUnion";

export class DescribeTerminationPolicyTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTerminationPolicyTypesInput,
      OutputTypesUnion,
      DescribeTerminationPolicyTypesOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTerminationPolicyTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTerminationPolicyTypesInput,
    DescribeTerminationPolicyTypesOutput,
    Blob
  >();

  constructor(readonly input: DescribeTerminationPolicyTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTerminationPolicyTypesInput,
    DescribeTerminationPolicyTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTerminationPolicyTypesInput,
        DescribeTerminationPolicyTypesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
