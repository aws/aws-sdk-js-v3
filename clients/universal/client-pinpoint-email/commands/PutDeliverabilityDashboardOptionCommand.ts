import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutDeliverabilityDashboardOption } from "../model/PutDeliverabilityDashboardOption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutDeliverabilityDashboardOptionInput } from "../types/PutDeliverabilityDashboardOptionInput";
import { PutDeliverabilityDashboardOptionOutput } from "../types/PutDeliverabilityDashboardOptionOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutDeliverabilityDashboardOptionInput";
export * from "../types/PutDeliverabilityDashboardOptionOutput";
export * from "../types/PutDeliverabilityDashboardOptionExceptionsUnion";

export class PutDeliverabilityDashboardOptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutDeliverabilityDashboardOptionInput,
      OutputTypesUnion,
      PutDeliverabilityDashboardOptionOutput,
      PinpointEmailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutDeliverabilityDashboardOption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutDeliverabilityDashboardOptionInput,
    PutDeliverabilityDashboardOptionOutput,
    Uint8Array
  >();

  constructor(readonly input: PutDeliverabilityDashboardOptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutDeliverabilityDashboardOptionInput,
    PutDeliverabilityDashboardOptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutDeliverabilityDashboardOptionInput,
        PutDeliverabilityDashboardOptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
