import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBParameterGroups } from "../model/operations/DescribeDBParameterGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBParameterGroupsInput } from "../types/DescribeDBParameterGroupsInput";
import { DescribeDBParameterGroupsOutput } from "../types/DescribeDBParameterGroupsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBParameterGroupsInput";
export * from "../types/DescribeDBParameterGroupsOutput";
export * from "../types/DescribeDBParameterGroupsExceptionsUnion";

export class DescribeDBParameterGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBParameterGroupsInput,
      OutputTypesUnion,
      DescribeDBParameterGroupsOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDBParameterGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBParameterGroupsInput,
    DescribeDBParameterGroupsOutput,
    Blob
  >();

  constructor(readonly input: DescribeDBParameterGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBParameterGroupsInput,
    DescribeDBParameterGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDBParameterGroupsInput, DescribeDBParameterGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
