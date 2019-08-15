import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeWorkspaces } from "../model/operations/DescribeWorkspaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeWorkspacesInput } from "../types/DescribeWorkspacesInput";
import { DescribeWorkspacesOutput } from "../types/DescribeWorkspacesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/DescribeWorkspacesInput";
export * from "../types/DescribeWorkspacesOutput";
export * from "../types/DescribeWorkspacesExceptionsUnion";

export class DescribeWorkspacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeWorkspacesInput,
      OutputTypesUnion,
      DescribeWorkspacesOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeWorkspaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeWorkspacesInput,
    DescribeWorkspacesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeWorkspacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeWorkspacesInput,
    DescribeWorkspacesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeWorkspacesInput, DescribeWorkspacesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
