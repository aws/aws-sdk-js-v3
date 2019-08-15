import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeUserHierarchyStructure } from "../model/operations/DescribeUserHierarchyStructure";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUserHierarchyStructureInput } from "../types/DescribeUserHierarchyStructureInput";
import { DescribeUserHierarchyStructureOutput } from "../types/DescribeUserHierarchyStructureOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/DescribeUserHierarchyStructureInput";
export * from "../types/DescribeUserHierarchyStructureOutput";
export * from "../types/DescribeUserHierarchyStructureExceptionsUnion";

export class DescribeUserHierarchyStructureCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUserHierarchyStructureInput,
      OutputTypesUnion,
      DescribeUserHierarchyStructureOutput,
      ConnectResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeUserHierarchyStructure;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUserHierarchyStructureInput,
    DescribeUserHierarchyStructureOutput,
    Blob
  >();

  constructor(readonly input: DescribeUserHierarchyStructureInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeUserHierarchyStructureInput,
    DescribeUserHierarchyStructureOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeUserHierarchyStructureInput,
        DescribeUserHierarchyStructureOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
