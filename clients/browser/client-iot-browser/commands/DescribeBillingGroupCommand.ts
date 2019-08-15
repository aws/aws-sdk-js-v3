import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeBillingGroup } from "../model/operations/DescribeBillingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBillingGroupInput } from "../types/DescribeBillingGroupInput";
import { DescribeBillingGroupOutput } from "../types/DescribeBillingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeBillingGroupInput";
export * from "../types/DescribeBillingGroupOutput";
export * from "../types/DescribeBillingGroupExceptionsUnion";

export class DescribeBillingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBillingGroupInput,
      OutputTypesUnion,
      DescribeBillingGroupOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeBillingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBillingGroupInput,
    DescribeBillingGroupOutput,
    Blob
  >();

  constructor(readonly input: DescribeBillingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeBillingGroupInput,
    DescribeBillingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBillingGroupInput, DescribeBillingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
