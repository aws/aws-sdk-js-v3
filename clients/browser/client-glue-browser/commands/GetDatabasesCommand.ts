import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDatabases } from "../model/operations/GetDatabases";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDatabasesInput } from "../types/GetDatabasesInput";
import { GetDatabasesOutput } from "../types/GetDatabasesOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetDatabasesInput";
export * from "../types/GetDatabasesOutput";
export * from "../types/GetDatabasesExceptionsUnion";

export class GetDatabasesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDatabasesInput,
      OutputTypesUnion,
      GetDatabasesOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetDatabases;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDatabasesInput,
    GetDatabasesOutput,
    Blob
  >();

  constructor(readonly input: GetDatabasesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDatabasesInput, GetDatabasesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDatabasesInput, GetDatabasesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
