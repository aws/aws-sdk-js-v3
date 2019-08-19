import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeServices } from "../model/operations/DescribeServices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeServicesInput } from "../types/DescribeServicesInput";
import { DescribeServicesOutput } from "../types/DescribeServicesOutput";
import { PricingResolvedConfiguration } from "../PricingConfiguration";
export * from "../types/DescribeServicesInput";
export * from "../types/DescribeServicesOutput";
export * from "../types/DescribeServicesExceptionsUnion";

export class DescribeServicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeServicesInput,
      OutputTypesUnion,
      DescribeServicesOutput,
      PricingResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeServices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeServicesInput,
    DescribeServicesOutput,
    Blob
  >();

  constructor(readonly input: DescribeServicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PricingResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeServicesInput, DescribeServicesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeServicesInput, DescribeServicesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
