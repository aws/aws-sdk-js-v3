import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartQueryExecution } from "../model/operations/StartQueryExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartQueryExecutionInput } from "../types/StartQueryExecutionInput";
import { StartQueryExecutionOutput } from "../types/StartQueryExecutionOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/StartQueryExecutionInput";
export * from "../types/StartQueryExecutionOutput";
export * from "../types/StartQueryExecutionExceptionsUnion";

export class StartQueryExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartQueryExecutionInput,
      OutputTypesUnion,
      StartQueryExecutionOutput,
      AthenaResolvedConfiguration,
      Blob
    > {
  readonly model = StartQueryExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartQueryExecutionInput,
    StartQueryExecutionOutput,
    Blob
  >();

  constructor(readonly input: StartQueryExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartQueryExecutionInput,
    StartQueryExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartQueryExecutionInput, StartQueryExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
