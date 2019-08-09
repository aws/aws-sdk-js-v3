import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPoliciesForTarget } from "../model/ListPoliciesForTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPoliciesForTargetInput } from "../types/ListPoliciesForTargetInput";
import { ListPoliciesForTargetOutput } from "../types/ListPoliciesForTargetOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListPoliciesForTargetInput";
export * from "../types/ListPoliciesForTargetOutput";
export * from "../types/ListPoliciesForTargetExceptionsUnion";

export class ListPoliciesForTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPoliciesForTargetInput,
      OutputTypesUnion,
      ListPoliciesForTargetOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = ListPoliciesForTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPoliciesForTargetInput,
    ListPoliciesForTargetOutput,
    Blob
  >();

  constructor(readonly input: ListPoliciesForTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPoliciesForTargetInput,
    ListPoliciesForTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPoliciesForTargetInput, ListPoliciesForTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
