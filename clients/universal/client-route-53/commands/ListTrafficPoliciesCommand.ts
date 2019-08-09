import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTrafficPolicies } from "../model/ListTrafficPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTrafficPoliciesInput } from "../types/ListTrafficPoliciesInput";
import { ListTrafficPoliciesOutput } from "../types/ListTrafficPoliciesOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListTrafficPoliciesInput";
export * from "../types/ListTrafficPoliciesOutput";
export * from "../types/ListTrafficPoliciesExceptionsUnion";

export class ListTrafficPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTrafficPoliciesInput,
      OutputTypesUnion,
      ListTrafficPoliciesOutput,
      Route53ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListTrafficPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTrafficPoliciesInput,
    ListTrafficPoliciesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListTrafficPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTrafficPoliciesInput,
    ListTrafficPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTrafficPoliciesInput, ListTrafficPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
