import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListUserPolicies } from "../model/ListUserPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUserPoliciesInput } from "../types/ListUserPoliciesInput";
import { ListUserPoliciesOutput } from "../types/ListUserPoliciesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListUserPoliciesInput";
export * from "../types/ListUserPoliciesOutput";
export * from "../types/ListUserPoliciesExceptionsUnion";

export class ListUserPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUserPoliciesInput,
      OutputTypesUnion,
      ListUserPoliciesOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListUserPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUserPoliciesInput,
    ListUserPoliciesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListUserPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListUserPoliciesInput, ListUserPoliciesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListUserPoliciesInput, ListUserPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
