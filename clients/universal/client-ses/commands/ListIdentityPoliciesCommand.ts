import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListIdentityPolicies } from "../model/ListIdentityPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListIdentityPoliciesInput } from "../types/ListIdentityPoliciesInput";
import { ListIdentityPoliciesOutput } from "../types/ListIdentityPoliciesOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/ListIdentityPoliciesInput";
export * from "../types/ListIdentityPoliciesOutput";
export * from "../types/ListIdentityPoliciesExceptionsUnion";

export class ListIdentityPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListIdentityPoliciesInput,
      OutputTypesUnion,
      ListIdentityPoliciesOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListIdentityPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListIdentityPoliciesInput,
    ListIdentityPoliciesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListIdentityPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListIdentityPoliciesInput,
    ListIdentityPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListIdentityPoliciesInput, ListIdentityPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
