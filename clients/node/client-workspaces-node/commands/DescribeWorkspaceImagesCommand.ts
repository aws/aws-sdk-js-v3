import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeWorkspaceImages } from "../model/operations/DescribeWorkspaceImages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeWorkspaceImagesInput } from "../types/DescribeWorkspaceImagesInput";
import { DescribeWorkspaceImagesOutput } from "../types/DescribeWorkspaceImagesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/DescribeWorkspaceImagesInput";
export * from "../types/DescribeWorkspaceImagesOutput";
export * from "../types/DescribeWorkspaceImagesExceptionsUnion";

export class DescribeWorkspaceImagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeWorkspaceImagesInput,
      OutputTypesUnion,
      DescribeWorkspaceImagesOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeWorkspaceImages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeWorkspaceImagesInput,
    DescribeWorkspaceImagesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeWorkspaceImagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeWorkspaceImagesInput,
    DescribeWorkspaceImagesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeWorkspaceImagesInput, DescribeWorkspaceImagesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
