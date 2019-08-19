import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeUserHierarchyGroup } from "../model/operations/DescribeUserHierarchyGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUserHierarchyGroupInput } from "../types/DescribeUserHierarchyGroupInput";
import { DescribeUserHierarchyGroupOutput } from "../types/DescribeUserHierarchyGroupOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/DescribeUserHierarchyGroupInput";
export * from "../types/DescribeUserHierarchyGroupOutput";
export * from "../types/DescribeUserHierarchyGroupExceptionsUnion";

export class DescribeUserHierarchyGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUserHierarchyGroupInput,
      OutputTypesUnion,
      DescribeUserHierarchyGroupOutput,
      ConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeUserHierarchyGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUserHierarchyGroupInput,
    DescribeUserHierarchyGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeUserHierarchyGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeUserHierarchyGroupInput,
    DescribeUserHierarchyGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeUserHierarchyGroupInput,
        DescribeUserHierarchyGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
