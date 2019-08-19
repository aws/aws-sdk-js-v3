import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAssociationExecutionTargets } from "../model/operations/DescribeAssociationExecutionTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAssociationExecutionTargetsInput } from "../types/DescribeAssociationExecutionTargetsInput";
import { DescribeAssociationExecutionTargetsOutput } from "../types/DescribeAssociationExecutionTargetsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeAssociationExecutionTargetsInput";
export * from "../types/DescribeAssociationExecutionTargetsOutput";
export * from "../types/DescribeAssociationExecutionTargetsExceptionsUnion";

export class DescribeAssociationExecutionTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAssociationExecutionTargetsInput,
      OutputTypesUnion,
      DescribeAssociationExecutionTargetsOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAssociationExecutionTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAssociationExecutionTargetsInput,
    DescribeAssociationExecutionTargetsOutput,
    Blob
  >();

  constructor(readonly input: DescribeAssociationExecutionTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAssociationExecutionTargetsInput,
    DescribeAssociationExecutionTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAssociationExecutionTargetsInput,
        DescribeAssociationExecutionTargetsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
