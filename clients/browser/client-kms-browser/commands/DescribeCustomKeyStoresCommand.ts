import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCustomKeyStores } from "../model/DescribeCustomKeyStores";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCustomKeyStoresInput } from "../types/DescribeCustomKeyStoresInput";
import { DescribeCustomKeyStoresOutput } from "../types/DescribeCustomKeyStoresOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/DescribeCustomKeyStoresInput";
export * from "../types/DescribeCustomKeyStoresOutput";
export * from "../types/DescribeCustomKeyStoresExceptionsUnion";

export class DescribeCustomKeyStoresCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCustomKeyStoresInput,
      OutputTypesUnion,
      DescribeCustomKeyStoresOutput,
      KMSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeCustomKeyStores;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCustomKeyStoresInput,
    DescribeCustomKeyStoresOutput,
    Blob
  >();

  constructor(readonly input: DescribeCustomKeyStoresInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCustomKeyStoresInput,
    DescribeCustomKeyStoresOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCustomKeyStoresInput, DescribeCustomKeyStoresOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
