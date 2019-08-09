import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVoices } from "../model/DescribeVoices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVoicesInput } from "../types/DescribeVoicesInput";
import { DescribeVoicesOutput } from "../types/DescribeVoicesOutput";
import { PollyResolvedConfiguration } from "../PollyConfiguration";
export * from "../types/DescribeVoicesInput";
export * from "../types/DescribeVoicesOutput";
export * from "../types/DescribeVoicesExceptionsUnion";

export class DescribeVoicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVoicesInput,
      OutputTypesUnion,
      DescribeVoicesOutput,
      PollyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeVoices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVoicesInput,
    DescribeVoicesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeVoicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PollyResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeVoicesInput, DescribeVoicesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVoicesInput, DescribeVoicesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
