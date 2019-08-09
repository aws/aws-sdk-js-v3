import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeObject } from "../model/DescribeObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeObjectInput } from "../types/DescribeObjectInput";
import { DescribeObjectOutput } from "../types/DescribeObjectOutput";
import { MediaStoreDataResolvedConfiguration } from "../MediaStoreDataConfiguration";
export * from "../types/DescribeObjectInput";
export * from "../types/DescribeObjectOutput";
export * from "../types/DescribeObjectExceptionsUnion";

export class DescribeObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeObjectInput,
      OutputTypesUnion,
      DescribeObjectOutput,
      MediaStoreDataResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeObjectInput,
    DescribeObjectOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaStoreDataResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeObjectInput, DescribeObjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeObjectInput, DescribeObjectOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
