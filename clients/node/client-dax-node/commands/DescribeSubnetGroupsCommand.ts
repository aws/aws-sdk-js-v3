import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSubnetGroups } from "../model/operations/DescribeSubnetGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSubnetGroupsInput } from "../types/DescribeSubnetGroupsInput";
import { DescribeSubnetGroupsOutput } from "../types/DescribeSubnetGroupsOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/DescribeSubnetGroupsInput";
export * from "../types/DescribeSubnetGroupsOutput";
export * from "../types/DescribeSubnetGroupsExceptionsUnion";

export class DescribeSubnetGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSubnetGroupsInput,
      OutputTypesUnion,
      DescribeSubnetGroupsOutput,
      DAXResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSubnetGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSubnetGroupsInput,
    DescribeSubnetGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSubnetGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSubnetGroupsInput,
    DescribeSubnetGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSubnetGroupsInput, DescribeSubnetGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
