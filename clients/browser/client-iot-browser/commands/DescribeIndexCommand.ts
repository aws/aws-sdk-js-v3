import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeIndex } from "../model/operations/DescribeIndex";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeIndexInput } from "../types/DescribeIndexInput";
import { DescribeIndexOutput } from "../types/DescribeIndexOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeIndexInput";
export * from "../types/DescribeIndexOutput";
export * from "../types/DescribeIndexExceptionsUnion";

export class DescribeIndexCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeIndexInput,
      OutputTypesUnion,
      DescribeIndexOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeIndex;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeIndexInput,
    DescribeIndexOutput,
    Blob
  >();

  constructor(readonly input: DescribeIndexInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeIndexInput, DescribeIndexOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeIndexInput, DescribeIndexOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
