import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRelationalDatabases } from "../model/operations/GetRelationalDatabases";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRelationalDatabasesInput } from "../types/GetRelationalDatabasesInput";
import { GetRelationalDatabasesOutput } from "../types/GetRelationalDatabasesOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRelationalDatabasesInput";
export * from "../types/GetRelationalDatabasesOutput";
export * from "../types/GetRelationalDatabasesExceptionsUnion";

export class GetRelationalDatabasesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRelationalDatabasesInput,
      OutputTypesUnion,
      GetRelationalDatabasesOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = GetRelationalDatabases;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabasesInput,
    GetRelationalDatabasesOutput,
    Blob
  >();

  constructor(readonly input: GetRelationalDatabasesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRelationalDatabasesInput,
    GetRelationalDatabasesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRelationalDatabasesInput, GetRelationalDatabasesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
