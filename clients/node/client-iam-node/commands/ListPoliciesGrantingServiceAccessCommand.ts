import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPoliciesGrantingServiceAccess } from "../model/operations/ListPoliciesGrantingServiceAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPoliciesGrantingServiceAccessInput } from "../types/ListPoliciesGrantingServiceAccessInput";
import { ListPoliciesGrantingServiceAccessOutput } from "../types/ListPoliciesGrantingServiceAccessOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListPoliciesGrantingServiceAccessInput";
export * from "../types/ListPoliciesGrantingServiceAccessOutput";
export * from "../types/ListPoliciesGrantingServiceAccessExceptionsUnion";

export class ListPoliciesGrantingServiceAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPoliciesGrantingServiceAccessInput,
      OutputTypesUnion,
      ListPoliciesGrantingServiceAccessOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPoliciesGrantingServiceAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPoliciesGrantingServiceAccessInput,
    ListPoliciesGrantingServiceAccessOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPoliciesGrantingServiceAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPoliciesGrantingServiceAccessInput,
    ListPoliciesGrantingServiceAccessOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListPoliciesGrantingServiceAccessInput,
        ListPoliciesGrantingServiceAccessOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
