import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListFindings } from "../model/ListFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFindingsInput } from "../types/ListFindingsInput";
import { ListFindingsOutput } from "../types/ListFindingsOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/ListFindingsInput";
export * from "../types/ListFindingsOutput";
export * from "../types/ListFindingsExceptionsUnion";

export class ListFindingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFindingsInput,
      OutputTypesUnion,
      ListFindingsOutput,
      GuardDutyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFindingsInput,
    ListFindingsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<ListFindingsInput, ListFindingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFindingsInput, ListFindingsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
