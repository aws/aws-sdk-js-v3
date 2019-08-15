import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDirectories } from "../model/operations/DescribeDirectories";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDirectoriesInput } from "../types/DescribeDirectoriesInput";
import { DescribeDirectoriesOutput } from "../types/DescribeDirectoriesOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DescribeDirectoriesInput";
export * from "../types/DescribeDirectoriesOutput";
export * from "../types/DescribeDirectoriesExceptionsUnion";

export class DescribeDirectoriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDirectoriesInput,
      OutputTypesUnion,
      DescribeDirectoriesOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDirectories;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDirectoriesInput,
    DescribeDirectoriesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDirectoriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDirectoriesInput,
    DescribeDirectoriesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDirectoriesInput, DescribeDirectoriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
