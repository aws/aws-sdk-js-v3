import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeWorkspaceBundles } from "../model/operations/DescribeWorkspaceBundles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeWorkspaceBundlesInput } from "../types/DescribeWorkspaceBundlesInput";
import { DescribeWorkspaceBundlesOutput } from "../types/DescribeWorkspaceBundlesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/DescribeWorkspaceBundlesInput";
export * from "../types/DescribeWorkspaceBundlesOutput";
export * from "../types/DescribeWorkspaceBundlesExceptionsUnion";

export class DescribeWorkspaceBundlesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeWorkspaceBundlesInput,
      OutputTypesUnion,
      DescribeWorkspaceBundlesOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeWorkspaceBundles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeWorkspaceBundlesInput,
    DescribeWorkspaceBundlesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeWorkspaceBundlesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeWorkspaceBundlesInput,
    DescribeWorkspaceBundlesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeWorkspaceBundlesInput, DescribeWorkspaceBundlesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
