import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeGroups } from "../model/DescribeGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeGroupsInput } from "../types/DescribeGroupsInput";
import { DescribeGroupsOutput } from "../types/DescribeGroupsOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DescribeGroupsInput";
export * from "../types/DescribeGroupsOutput";
export * from "../types/DescribeGroupsExceptionsUnion";

export class DescribeGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeGroupsInput,
      OutputTypesUnion,
      DescribeGroupsOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeGroupsInput,
    DescribeGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeGroupsInput, DescribeGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeGroupsInput, DescribeGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
