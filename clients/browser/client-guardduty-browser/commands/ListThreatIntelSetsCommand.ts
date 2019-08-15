import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListThreatIntelSets } from "../model/operations/ListThreatIntelSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListThreatIntelSetsInput } from "../types/ListThreatIntelSetsInput";
import { ListThreatIntelSetsOutput } from "../types/ListThreatIntelSetsOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/ListThreatIntelSetsInput";
export * from "../types/ListThreatIntelSetsOutput";
export * from "../types/ListThreatIntelSetsExceptionsUnion";

export class ListThreatIntelSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListThreatIntelSetsInput,
      OutputTypesUnion,
      ListThreatIntelSetsOutput,
      GuardDutyResolvedConfiguration,
      Blob
    > {
  readonly model = ListThreatIntelSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListThreatIntelSetsInput,
    ListThreatIntelSetsOutput,
    Blob
  >();

  constructor(readonly input: ListThreatIntelSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListThreatIntelSetsInput,
    ListThreatIntelSetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListThreatIntelSetsInput, ListThreatIntelSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
