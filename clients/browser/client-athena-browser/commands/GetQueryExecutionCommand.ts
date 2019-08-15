import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetQueryExecution } from "../model/operations/GetQueryExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetQueryExecutionInput } from "../types/GetQueryExecutionInput";
import { GetQueryExecutionOutput } from "../types/GetQueryExecutionOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/GetQueryExecutionInput";
export * from "../types/GetQueryExecutionOutput";
export * from "../types/GetQueryExecutionExceptionsUnion";

export class GetQueryExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetQueryExecutionInput,
      OutputTypesUnion,
      GetQueryExecutionOutput,
      AthenaResolvedConfiguration,
      Blob
    > {
  readonly model = GetQueryExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetQueryExecutionInput,
    GetQueryExecutionOutput,
    Blob
  >();

  constructor(readonly input: GetQueryExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<GetQueryExecutionInput, GetQueryExecutionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetQueryExecutionInput, GetQueryExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
