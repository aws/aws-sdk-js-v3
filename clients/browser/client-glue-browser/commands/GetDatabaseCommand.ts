import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDatabase } from "../model/operations/GetDatabase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDatabaseInput } from "../types/GetDatabaseInput";
import { GetDatabaseOutput } from "../types/GetDatabaseOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetDatabaseInput";
export * from "../types/GetDatabaseOutput";
export * from "../types/GetDatabaseExceptionsUnion";

export class GetDatabaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDatabaseInput,
      OutputTypesUnion,
      GetDatabaseOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetDatabase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDatabaseInput,
    GetDatabaseOutput,
    Blob
  >();

  constructor(readonly input: GetDatabaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDatabaseInput, GetDatabaseOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDatabaseInput, GetDatabaseOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
