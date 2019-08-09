import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStorage } from "../model/DescribeStorage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStorageInput } from "../types/DescribeStorageInput";
import { DescribeStorageOutput } from "../types/DescribeStorageOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeStorageInput";
export * from "../types/DescribeStorageOutput";
export * from "../types/DescribeStorageExceptionsUnion";

export class DescribeStorageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStorageInput,
      OutputTypesUnion,
      DescribeStorageOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeStorage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStorageInput,
    DescribeStorageOutput,
    Blob
  >();

  constructor(readonly input: DescribeStorageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeStorageInput, DescribeStorageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStorageInput, DescribeStorageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
