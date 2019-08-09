import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetTable } from "../model/GetTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTableInput } from "../types/GetTableInput";
import { GetTableOutput } from "../types/GetTableOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetTableInput";
export * from "../types/GetTableOutput";
export * from "../types/GetTableExceptionsUnion";

export class GetTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTableInput,
      OutputTypesUnion,
      GetTableOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetTable;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTableInput,
    GetTableOutput,
    Blob
  >();

  constructor(readonly input: GetTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTableInput, GetTableOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTableInput, GetTableOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
