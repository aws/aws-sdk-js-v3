import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDBSubnetGroups } from "../model/DescribeDBSubnetGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBSubnetGroupsInput } from "../types/DescribeDBSubnetGroupsInput";
import { DescribeDBSubnetGroupsOutput } from "../types/DescribeDBSubnetGroupsOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/DescribeDBSubnetGroupsInput";
export * from "../types/DescribeDBSubnetGroupsOutput";
export * from "../types/DescribeDBSubnetGroupsExceptionsUnion";

export class DescribeDBSubnetGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBSubnetGroupsInput,
      OutputTypesUnion,
      DescribeDBSubnetGroupsOutput,
      NeptuneResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDBSubnetGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBSubnetGroupsInput,
    DescribeDBSubnetGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDBSubnetGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBSubnetGroupsInput,
    DescribeDBSubnetGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDBSubnetGroupsInput, DescribeDBSubnetGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
