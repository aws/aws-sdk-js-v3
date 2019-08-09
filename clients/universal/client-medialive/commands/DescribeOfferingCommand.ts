import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeOffering } from "../model/DescribeOffering";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOfferingInput } from "../types/DescribeOfferingInput";
import { DescribeOfferingOutput } from "../types/DescribeOfferingOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/DescribeOfferingInput";
export * from "../types/DescribeOfferingOutput";
export * from "../types/DescribeOfferingExceptionsUnion";

export class DescribeOfferingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOfferingInput,
      OutputTypesUnion,
      DescribeOfferingOutput,
      MediaLiveResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeOffering;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOfferingInput,
    DescribeOfferingOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeOfferingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeOfferingInput, DescribeOfferingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeOfferingInput, DescribeOfferingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
