import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTrafficPolicyInstancesByPolicy } from "../model/ListTrafficPolicyInstancesByPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTrafficPolicyInstancesByPolicyInput } from "../types/ListTrafficPolicyInstancesByPolicyInput";
import { ListTrafficPolicyInstancesByPolicyOutput } from "../types/ListTrafficPolicyInstancesByPolicyOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListTrafficPolicyInstancesByPolicyInput";
export * from "../types/ListTrafficPolicyInstancesByPolicyOutput";
export * from "../types/ListTrafficPolicyInstancesByPolicyExceptionsUnion";

export class ListTrafficPolicyInstancesByPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTrafficPolicyInstancesByPolicyInput,
      OutputTypesUnion,
      ListTrafficPolicyInstancesByPolicyOutput,
      Route53ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListTrafficPolicyInstancesByPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTrafficPolicyInstancesByPolicyInput,
    ListTrafficPolicyInstancesByPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: ListTrafficPolicyInstancesByPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTrafficPolicyInstancesByPolicyInput,
    ListTrafficPolicyInstancesByPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListTrafficPolicyInstancesByPolicyInput,
        ListTrafficPolicyInstancesByPolicyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
