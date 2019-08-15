import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeUpdate } from "../model/operations/DescribeUpdate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUpdateInput } from "../types/DescribeUpdateInput";
import { DescribeUpdateOutput } from "../types/DescribeUpdateOutput";
import { EKSResolvedConfiguration } from "../EKSConfiguration";
export * from "../types/DescribeUpdateInput";
export * from "../types/DescribeUpdateOutput";
export * from "../types/DescribeUpdateExceptionsUnion";

export class DescribeUpdateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUpdateInput,
      OutputTypesUnion,
      DescribeUpdateOutput,
      EKSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeUpdate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUpdateInput,
    DescribeUpdateOutput,
    Blob
  >();

  constructor(readonly input: DescribeUpdateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EKSResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeUpdateInput, DescribeUpdateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeUpdateInput, DescribeUpdateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
