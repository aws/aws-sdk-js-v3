import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPrincipalPolicies } from "../model/ListPrincipalPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPrincipalPoliciesInput } from "../types/ListPrincipalPoliciesInput";
import { ListPrincipalPoliciesOutput } from "../types/ListPrincipalPoliciesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListPrincipalPoliciesInput";
export * from "../types/ListPrincipalPoliciesOutput";
export * from "../types/ListPrincipalPoliciesExceptionsUnion";

export class ListPrincipalPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPrincipalPoliciesInput,
      OutputTypesUnion,
      ListPrincipalPoliciesOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListPrincipalPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPrincipalPoliciesInput,
    ListPrincipalPoliciesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListPrincipalPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPrincipalPoliciesInput,
    ListPrincipalPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPrincipalPoliciesInput, ListPrincipalPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
