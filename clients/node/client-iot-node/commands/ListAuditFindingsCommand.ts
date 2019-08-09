import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAuditFindings } from "../model/ListAuditFindings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAuditFindingsInput } from "../types/ListAuditFindingsInput";
import { ListAuditFindingsOutput } from "../types/ListAuditFindingsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListAuditFindingsInput";
export * from "../types/ListAuditFindingsOutput";
export * from "../types/ListAuditFindingsExceptionsUnion";

export class ListAuditFindingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAuditFindingsInput,
      OutputTypesUnion,
      ListAuditFindingsOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAuditFindings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAuditFindingsInput,
    ListAuditFindingsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAuditFindingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAuditFindingsInput, ListAuditFindingsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAuditFindingsInput, ListAuditFindingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
