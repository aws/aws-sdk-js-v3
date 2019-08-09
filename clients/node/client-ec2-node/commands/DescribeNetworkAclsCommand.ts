import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeNetworkAcls } from "../model/DescribeNetworkAcls";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNetworkAclsInput } from "../types/DescribeNetworkAclsInput";
import { DescribeNetworkAclsOutput } from "../types/DescribeNetworkAclsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeNetworkAclsInput";
export * from "../types/DescribeNetworkAclsOutput";
export * from "../types/DescribeNetworkAclsExceptionsUnion";

export class DescribeNetworkAclsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNetworkAclsInput,
      OutputTypesUnion,
      DescribeNetworkAclsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeNetworkAcls;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNetworkAclsInput,
    DescribeNetworkAclsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeNetworkAclsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNetworkAclsInput,
    DescribeNetworkAclsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeNetworkAclsInput, DescribeNetworkAclsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
