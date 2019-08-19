import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVpcClassicLink } from "../model/operations/DescribeVpcClassicLink";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcClassicLinkInput } from "../types/DescribeVpcClassicLinkInput";
import { DescribeVpcClassicLinkOutput } from "../types/DescribeVpcClassicLinkOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpcClassicLinkInput";
export * from "../types/DescribeVpcClassicLinkOutput";
export * from "../types/DescribeVpcClassicLinkExceptionsUnion";

export class DescribeVpcClassicLinkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcClassicLinkInput,
      OutputTypesUnion,
      DescribeVpcClassicLinkOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeVpcClassicLink;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcClassicLinkInput,
    DescribeVpcClassicLinkOutput,
    Blob
  >();

  constructor(readonly input: DescribeVpcClassicLinkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpcClassicLinkInput,
    DescribeVpcClassicLinkOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVpcClassicLinkInput, DescribeVpcClassicLinkOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
