import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeWorkspaceDirectories } from "../model/operations/DescribeWorkspaceDirectories";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeWorkspaceDirectoriesInput } from "../types/DescribeWorkspaceDirectoriesInput";
import { DescribeWorkspaceDirectoriesOutput } from "../types/DescribeWorkspaceDirectoriesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/DescribeWorkspaceDirectoriesInput";
export * from "../types/DescribeWorkspaceDirectoriesOutput";
export * from "../types/DescribeWorkspaceDirectoriesExceptionsUnion";

export class DescribeWorkspaceDirectoriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeWorkspaceDirectoriesInput,
      OutputTypesUnion,
      DescribeWorkspaceDirectoriesOutput,
      WorkSpacesResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeWorkspaceDirectories;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeWorkspaceDirectoriesInput,
    DescribeWorkspaceDirectoriesOutput,
    Blob
  >();

  constructor(readonly input: DescribeWorkspaceDirectoriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeWorkspaceDirectoriesInput,
    DescribeWorkspaceDirectoriesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeWorkspaceDirectoriesInput,
        DescribeWorkspaceDirectoriesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
