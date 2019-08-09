import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ViewBilling } from "../model/ViewBilling";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ViewBillingInput } from "../types/ViewBillingInput";
import { ViewBillingOutput } from "../types/ViewBillingOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/ViewBillingInput";
export * from "../types/ViewBillingOutput";
export * from "../types/ViewBillingExceptionsUnion";

export class ViewBillingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ViewBillingInput,
      OutputTypesUnion,
      ViewBillingOutput,
      Route53DomainsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ViewBilling;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ViewBillingInput,
    ViewBillingOutput,
    Uint8Array
  >();

  constructor(readonly input: ViewBillingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<ViewBillingInput, ViewBillingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ViewBillingInput, ViewBillingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
