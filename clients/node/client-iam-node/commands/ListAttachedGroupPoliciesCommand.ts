import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAttachedGroupPolicies } from "../model/operations/ListAttachedGroupPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAttachedGroupPoliciesInput } from "../types/ListAttachedGroupPoliciesInput";
import { ListAttachedGroupPoliciesOutput } from "../types/ListAttachedGroupPoliciesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListAttachedGroupPoliciesInput";
export * from "../types/ListAttachedGroupPoliciesOutput";
export * from "../types/ListAttachedGroupPoliciesExceptionsUnion";

export class ListAttachedGroupPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAttachedGroupPoliciesInput,
      OutputTypesUnion,
      ListAttachedGroupPoliciesOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAttachedGroupPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAttachedGroupPoliciesInput,
    ListAttachedGroupPoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAttachedGroupPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAttachedGroupPoliciesInput,
    ListAttachedGroupPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAttachedGroupPoliciesInput, ListAttachedGroupPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
