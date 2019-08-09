import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPolicies } from "../model/ListPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPoliciesInput } from "../types/ListPoliciesInput";
import { ListPoliciesOutput } from "../types/ListPoliciesOutput";
import { FMSResolvedConfiguration } from "../FMSConfiguration";
export * from "../types/ListPoliciesInput";
export * from "../types/ListPoliciesOutput";
export * from "../types/ListPoliciesExceptionsUnion";

export class ListPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPoliciesInput,
      OutputTypesUnion,
      ListPoliciesOutput,
      FMSResolvedConfiguration,
      Blob
    > {
  readonly model = ListPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPoliciesInput,
    ListPoliciesOutput,
    Blob
  >();

  constructor(readonly input: ListPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: FMSResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPoliciesInput, ListPoliciesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPoliciesInput, ListPoliciesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
