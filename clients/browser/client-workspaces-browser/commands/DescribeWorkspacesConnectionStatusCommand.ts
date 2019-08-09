import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeWorkspacesConnectionStatus } from "../model/DescribeWorkspacesConnectionStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeWorkspacesConnectionStatusInput } from "../types/DescribeWorkspacesConnectionStatusInput";
import { DescribeWorkspacesConnectionStatusOutput } from "../types/DescribeWorkspacesConnectionStatusOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/DescribeWorkspacesConnectionStatusInput";
export * from "../types/DescribeWorkspacesConnectionStatusOutput";
export * from "../types/DescribeWorkspacesConnectionStatusExceptionsUnion";

export class DescribeWorkspacesConnectionStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeWorkspacesConnectionStatusInput,
      OutputTypesUnion,
      DescribeWorkspacesConnectionStatusOutput,
      WorkSpacesResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeWorkspacesConnectionStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeWorkspacesConnectionStatusInput,
    DescribeWorkspacesConnectionStatusOutput,
    Blob
  >();

  constructor(readonly input: DescribeWorkspacesConnectionStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeWorkspacesConnectionStatusInput,
    DescribeWorkspacesConnectionStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeWorkspacesConnectionStatusInput,
        DescribeWorkspacesConnectionStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
