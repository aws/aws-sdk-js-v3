import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRoleAliases } from "../model/operations/ListRoleAliases";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRoleAliasesInput } from "../types/ListRoleAliasesInput";
import { ListRoleAliasesOutput } from "../types/ListRoleAliasesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListRoleAliasesInput";
export * from "../types/ListRoleAliasesOutput";
export * from "../types/ListRoleAliasesExceptionsUnion";

export class ListRoleAliasesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRoleAliasesInput,
      OutputTypesUnion,
      ListRoleAliasesOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListRoleAliases;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRoleAliasesInput,
    ListRoleAliasesOutput,
    Blob
  >();

  constructor(readonly input: ListRoleAliasesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRoleAliasesInput, ListRoleAliasesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRoleAliasesInput, ListRoleAliasesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
