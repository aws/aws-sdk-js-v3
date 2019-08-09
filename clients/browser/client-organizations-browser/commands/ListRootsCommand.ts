import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRoots } from "../model/ListRoots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRootsInput } from "../types/ListRootsInput";
import { ListRootsOutput } from "../types/ListRootsOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListRootsInput";
export * from "../types/ListRootsOutput";
export * from "../types/ListRootsExceptionsUnion";

export class ListRootsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRootsInput,
      OutputTypesUnion,
      ListRootsOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = ListRoots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRootsInput,
    ListRootsOutput,
    Blob
  >();

  constructor(readonly input: ListRootsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRootsInput, ListRootsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRootsInput, ListRootsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
