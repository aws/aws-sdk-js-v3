import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRoles } from "../model/ListRoles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRolesInput } from "../types/ListRolesInput";
import { ListRolesOutput } from "../types/ListRolesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListRolesInput";
export * from "../types/ListRolesOutput";
export * from "../types/ListRolesExceptionsUnion";

export class ListRolesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRolesInput,
      OutputTypesUnion,
      ListRolesOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRoles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRolesInput,
    ListRolesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRolesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRolesInput, ListRolesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRolesInput, ListRolesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
