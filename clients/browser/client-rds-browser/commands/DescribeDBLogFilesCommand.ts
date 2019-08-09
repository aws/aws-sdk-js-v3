import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDBLogFiles } from "../model/DescribeDBLogFiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBLogFilesInput } from "../types/DescribeDBLogFilesInput";
import { DescribeDBLogFilesOutput } from "../types/DescribeDBLogFilesOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBLogFilesInput";
export * from "../types/DescribeDBLogFilesOutput";
export * from "../types/DescribeDBLogFilesExceptionsUnion";

export class DescribeDBLogFilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBLogFilesInput,
      OutputTypesUnion,
      DescribeDBLogFilesOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDBLogFiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBLogFilesInput,
    DescribeDBLogFilesOutput,
    Blob
  >();

  constructor(readonly input: DescribeDBLogFilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBLogFilesInput,
    DescribeDBLogFilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDBLogFilesInput, DescribeDBLogFilesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
