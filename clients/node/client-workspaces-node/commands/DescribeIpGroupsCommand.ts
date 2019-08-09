import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeIpGroups } from "../model/DescribeIpGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeIpGroupsInput } from "../types/DescribeIpGroupsInput";
import { DescribeIpGroupsOutput } from "../types/DescribeIpGroupsOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/DescribeIpGroupsInput";
export * from "../types/DescribeIpGroupsOutput";
export * from "../types/DescribeIpGroupsExceptionsUnion";

export class DescribeIpGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeIpGroupsInput,
      OutputTypesUnion,
      DescribeIpGroupsOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeIpGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeIpGroupsInput,
    DescribeIpGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeIpGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeIpGroupsInput, DescribeIpGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeIpGroupsInput, DescribeIpGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
