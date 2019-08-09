import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSharedDirectories } from "../model/DescribeSharedDirectories";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSharedDirectoriesInput } from "../types/DescribeSharedDirectoriesInput";
import { DescribeSharedDirectoriesOutput } from "../types/DescribeSharedDirectoriesOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DescribeSharedDirectoriesInput";
export * from "../types/DescribeSharedDirectoriesOutput";
export * from "../types/DescribeSharedDirectoriesExceptionsUnion";

export class DescribeSharedDirectoriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSharedDirectoriesInput,
      OutputTypesUnion,
      DescribeSharedDirectoriesOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSharedDirectories;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSharedDirectoriesInput,
    DescribeSharedDirectoriesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSharedDirectoriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSharedDirectoriesInput,
    DescribeSharedDirectoriesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSharedDirectoriesInput, DescribeSharedDirectoriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
