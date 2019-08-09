import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeBundle } from "../model/DescribeBundle";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBundleInput } from "../types/DescribeBundleInput";
import { DescribeBundleOutput } from "../types/DescribeBundleOutput";
import { MobileResolvedConfiguration } from "../MobileConfiguration";
export * from "../types/DescribeBundleInput";
export * from "../types/DescribeBundleOutput";
export * from "../types/DescribeBundleExceptionsUnion";

export class DescribeBundleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBundleInput,
      OutputTypesUnion,
      DescribeBundleOutput,
      MobileResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeBundle;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBundleInput,
    DescribeBundleOutput,
    Blob
  >();

  constructor(readonly input: DescribeBundleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MobileResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeBundleInput, DescribeBundleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBundleInput, DescribeBundleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
