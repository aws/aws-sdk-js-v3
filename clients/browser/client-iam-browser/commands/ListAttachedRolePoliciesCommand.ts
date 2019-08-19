import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAttachedRolePolicies } from "../model/operations/ListAttachedRolePolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAttachedRolePoliciesInput } from "../types/ListAttachedRolePoliciesInput";
import { ListAttachedRolePoliciesOutput } from "../types/ListAttachedRolePoliciesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListAttachedRolePoliciesInput";
export * from "../types/ListAttachedRolePoliciesOutput";
export * from "../types/ListAttachedRolePoliciesExceptionsUnion";

export class ListAttachedRolePoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAttachedRolePoliciesInput,
      OutputTypesUnion,
      ListAttachedRolePoliciesOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = ListAttachedRolePolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAttachedRolePoliciesInput,
    ListAttachedRolePoliciesOutput,
    Blob
  >();

  constructor(readonly input: ListAttachedRolePoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAttachedRolePoliciesInput,
    ListAttachedRolePoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAttachedRolePoliciesInput, ListAttachedRolePoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
