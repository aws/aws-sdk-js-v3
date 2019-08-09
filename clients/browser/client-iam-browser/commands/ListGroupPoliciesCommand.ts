import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListGroupPolicies } from "../model/ListGroupPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGroupPoliciesInput } from "../types/ListGroupPoliciesInput";
import { ListGroupPoliciesOutput } from "../types/ListGroupPoliciesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListGroupPoliciesInput";
export * from "../types/ListGroupPoliciesOutput";
export * from "../types/ListGroupPoliciesExceptionsUnion";

export class ListGroupPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGroupPoliciesInput,
      OutputTypesUnion,
      ListGroupPoliciesOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = ListGroupPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGroupPoliciesInput,
    ListGroupPoliciesOutput,
    Blob
  >();

  constructor(readonly input: ListGroupPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListGroupPoliciesInput, ListGroupPoliciesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGroupPoliciesInput, ListGroupPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
