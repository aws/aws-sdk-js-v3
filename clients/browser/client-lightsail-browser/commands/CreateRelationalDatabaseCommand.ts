import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRelationalDatabase } from "../model/operations/CreateRelationalDatabase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRelationalDatabaseInput } from "../types/CreateRelationalDatabaseInput";
import { CreateRelationalDatabaseOutput } from "../types/CreateRelationalDatabaseOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateRelationalDatabaseInput";
export * from "../types/CreateRelationalDatabaseOutput";
export * from "../types/CreateRelationalDatabaseExceptionsUnion";

export class CreateRelationalDatabaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRelationalDatabaseInput,
      OutputTypesUnion,
      CreateRelationalDatabaseOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = CreateRelationalDatabase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRelationalDatabaseInput,
    CreateRelationalDatabaseOutput,
    Blob
  >();

  constructor(readonly input: CreateRelationalDatabaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateRelationalDatabaseInput,
    CreateRelationalDatabaseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRelationalDatabaseInput, CreateRelationalDatabaseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
