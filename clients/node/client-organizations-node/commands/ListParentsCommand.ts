import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListParents } from "../model/ListParents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListParentsInput } from "../types/ListParentsInput";
import { ListParentsOutput } from "../types/ListParentsOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListParentsInput";
export * from "../types/ListParentsOutput";
export * from "../types/ListParentsExceptionsUnion";

export class ListParentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListParentsInput,
      OutputTypesUnion,
      ListParentsOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListParents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListParentsInput,
    ListParentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListParentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListParentsInput, ListParentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListParentsInput, ListParentsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
