import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartRelationalDatabase } from "../model/StartRelationalDatabase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartRelationalDatabaseInput } from "../types/StartRelationalDatabaseInput";
import { StartRelationalDatabaseOutput } from "../types/StartRelationalDatabaseOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/StartRelationalDatabaseInput";
export * from "../types/StartRelationalDatabaseOutput";
export * from "../types/StartRelationalDatabaseExceptionsUnion";

export class StartRelationalDatabaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartRelationalDatabaseInput,
      OutputTypesUnion,
      StartRelationalDatabaseOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartRelationalDatabase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartRelationalDatabaseInput,
    StartRelationalDatabaseOutput,
    Uint8Array
  >();

  constructor(readonly input: StartRelationalDatabaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartRelationalDatabaseInput,
    StartRelationalDatabaseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartRelationalDatabaseInput, StartRelationalDatabaseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
