import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeLocationS3 } from "../model/operations/DescribeLocationS3";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLocationS3Input } from "../types/DescribeLocationS3Input";
import { DescribeLocationS3Output } from "../types/DescribeLocationS3Output";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/DescribeLocationS3Input";
export * from "../types/DescribeLocationS3Output";
export * from "../types/DescribeLocationS3ExceptionsUnion";

export class DescribeLocationS3Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLocationS3Input,
      OutputTypesUnion,
      DescribeLocationS3Output,
      DataSyncResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeLocationS3;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLocationS3Input,
    DescribeLocationS3Output,
    Blob
  >();

  constructor(readonly input: DescribeLocationS3Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLocationS3Input,
    DescribeLocationS3Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLocationS3Input, DescribeLocationS3Output>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
