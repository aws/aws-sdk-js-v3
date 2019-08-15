import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListChildren } from "../model/operations/ListChildren";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListChildrenInput } from "../types/ListChildrenInput";
import { ListChildrenOutput } from "../types/ListChildrenOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListChildrenInput";
export * from "../types/ListChildrenOutput";
export * from "../types/ListChildrenExceptionsUnion";

export class ListChildrenCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListChildrenInput,
      OutputTypesUnion,
      ListChildrenOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListChildren;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListChildrenInput,
    ListChildrenOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListChildrenInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListChildrenInput, ListChildrenOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListChildrenInput, ListChildrenOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
