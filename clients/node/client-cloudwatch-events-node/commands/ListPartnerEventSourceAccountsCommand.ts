import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPartnerEventSourceAccounts } from "../model/ListPartnerEventSourceAccounts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPartnerEventSourceAccountsInput } from "../types/ListPartnerEventSourceAccountsInput";
import { ListPartnerEventSourceAccountsOutput } from "../types/ListPartnerEventSourceAccountsOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/ListPartnerEventSourceAccountsInput";
export * from "../types/ListPartnerEventSourceAccountsOutput";
export * from "../types/ListPartnerEventSourceAccountsExceptionsUnion";

export class ListPartnerEventSourceAccountsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPartnerEventSourceAccountsInput,
      OutputTypesUnion,
      ListPartnerEventSourceAccountsOutput,
      CloudWatchEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPartnerEventSourceAccounts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPartnerEventSourceAccountsInput,
    ListPartnerEventSourceAccountsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPartnerEventSourceAccountsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPartnerEventSourceAccountsInput,
    ListPartnerEventSourceAccountsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListPartnerEventSourceAccountsInput,
        ListPartnerEventSourceAccountsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
