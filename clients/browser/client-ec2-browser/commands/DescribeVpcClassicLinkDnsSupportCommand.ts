import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVpcClassicLinkDnsSupport } from "../model/DescribeVpcClassicLinkDnsSupport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcClassicLinkDnsSupportInput } from "../types/DescribeVpcClassicLinkDnsSupportInput";
import { DescribeVpcClassicLinkDnsSupportOutput } from "../types/DescribeVpcClassicLinkDnsSupportOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpcClassicLinkDnsSupportInput";
export * from "../types/DescribeVpcClassicLinkDnsSupportOutput";
export * from "../types/DescribeVpcClassicLinkDnsSupportExceptionsUnion";

export class DescribeVpcClassicLinkDnsSupportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcClassicLinkDnsSupportInput,
      OutputTypesUnion,
      DescribeVpcClassicLinkDnsSupportOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeVpcClassicLinkDnsSupport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcClassicLinkDnsSupportInput,
    DescribeVpcClassicLinkDnsSupportOutput,
    Blob
  >();

  constructor(readonly input: DescribeVpcClassicLinkDnsSupportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpcClassicLinkDnsSupportInput,
    DescribeVpcClassicLinkDnsSupportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeVpcClassicLinkDnsSupportInput,
        DescribeVpcClassicLinkDnsSupportOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
