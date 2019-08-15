import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePlacementGroups } from "../model/operations/DescribePlacementGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePlacementGroupsInput } from "../types/DescribePlacementGroupsInput";
import { DescribePlacementGroupsOutput } from "../types/DescribePlacementGroupsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribePlacementGroupsInput";
export * from "../types/DescribePlacementGroupsOutput";
export * from "../types/DescribePlacementGroupsExceptionsUnion";

export class DescribePlacementGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePlacementGroupsInput,
      OutputTypesUnion,
      DescribePlacementGroupsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribePlacementGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePlacementGroupsInput,
    DescribePlacementGroupsOutput,
    Blob
  >();

  constructor(readonly input: DescribePlacementGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePlacementGroupsInput,
    DescribePlacementGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePlacementGroupsInput, DescribePlacementGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
