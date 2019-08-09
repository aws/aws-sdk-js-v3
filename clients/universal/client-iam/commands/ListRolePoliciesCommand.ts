import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRolePolicies } from "../model/ListRolePolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRolePoliciesInput } from "../types/ListRolePoliciesInput";
import { ListRolePoliciesOutput } from "../types/ListRolePoliciesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListRolePoliciesInput";
export * from "../types/ListRolePoliciesOutput";
export * from "../types/ListRolePoliciesExceptionsUnion";

export class ListRolePoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRolePoliciesInput,
      OutputTypesUnion,
      ListRolePoliciesOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListRolePolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRolePoliciesInput,
    ListRolePoliciesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListRolePoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRolePoliciesInput, ListRolePoliciesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRolePoliciesInput, ListRolePoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
