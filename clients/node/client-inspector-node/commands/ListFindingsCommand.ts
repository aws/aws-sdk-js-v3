import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListFindings } from "../model/ListFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFindingsInput } from "../types/ListFindingsInput";
import { ListFindingsOutput } from "../types/ListFindingsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
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
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFindingsInput,
    ListFindingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
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
