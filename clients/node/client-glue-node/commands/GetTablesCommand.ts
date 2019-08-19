import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTables } from "../model/operations/GetTables";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTablesInput } from "../types/GetTablesInput";
import { GetTablesOutput } from "../types/GetTablesOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetTablesInput";
export * from "../types/GetTablesOutput";
export * from "../types/GetTablesExceptionsUnion";

export class GetTablesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTablesInput,
      OutputTypesUnion,
      GetTablesOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTables;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTablesInput,
    GetTablesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTablesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTablesInput, GetTablesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTablesInput, GetTablesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
