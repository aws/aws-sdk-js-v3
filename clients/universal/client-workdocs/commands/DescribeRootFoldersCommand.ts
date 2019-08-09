import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRootFolders } from "../model/DescribeRootFolders";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRootFoldersInput } from "../types/DescribeRootFoldersInput";
import { DescribeRootFoldersOutput } from "../types/DescribeRootFoldersOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DescribeRootFoldersInput";
export * from "../types/DescribeRootFoldersOutput";
export * from "../types/DescribeRootFoldersExceptionsUnion";

export class DescribeRootFoldersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRootFoldersInput,
      OutputTypesUnion,
      DescribeRootFoldersOutput,
      WorkDocsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeRootFolders;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRootFoldersInput,
    DescribeRootFoldersOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeRootFoldersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRootFoldersInput,
    DescribeRootFoldersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRootFoldersInput, DescribeRootFoldersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
