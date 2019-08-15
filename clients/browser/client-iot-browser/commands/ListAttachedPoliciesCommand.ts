import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAttachedPolicies } from "../model/operations/ListAttachedPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAttachedPoliciesInput } from "../types/ListAttachedPoliciesInput";
import { ListAttachedPoliciesOutput } from "../types/ListAttachedPoliciesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListAttachedPoliciesInput";
export * from "../types/ListAttachedPoliciesOutput";
export * from "../types/ListAttachedPoliciesExceptionsUnion";

export class ListAttachedPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAttachedPoliciesInput,
      OutputTypesUnion,
      ListAttachedPoliciesOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListAttachedPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAttachedPoliciesInput,
    ListAttachedPoliciesOutput,
    Blob
  >();

  constructor(readonly input: ListAttachedPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAttachedPoliciesInput,
    ListAttachedPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAttachedPoliciesInput, ListAttachedPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
