import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListConfigurationRevisions } from "../model/operations/ListConfigurationRevisions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListConfigurationRevisionsInput } from "../types/ListConfigurationRevisionsInput";
import { ListConfigurationRevisionsOutput } from "../types/ListConfigurationRevisionsOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/ListConfigurationRevisionsInput";
export * from "../types/ListConfigurationRevisionsOutput";
export * from "../types/ListConfigurationRevisionsExceptionsUnion";

export class ListConfigurationRevisionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListConfigurationRevisionsInput,
      OutputTypesUnion,
      ListConfigurationRevisionsOutput,
      mqResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListConfigurationRevisions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListConfigurationRevisionsInput,
    ListConfigurationRevisionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListConfigurationRevisionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListConfigurationRevisionsInput,
    ListConfigurationRevisionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListConfigurationRevisionsInput,
        ListConfigurationRevisionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
