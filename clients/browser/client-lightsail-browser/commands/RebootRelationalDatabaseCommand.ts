import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RebootRelationalDatabase } from "../model/RebootRelationalDatabase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebootRelationalDatabaseInput } from "../types/RebootRelationalDatabaseInput";
import { RebootRelationalDatabaseOutput } from "../types/RebootRelationalDatabaseOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/RebootRelationalDatabaseInput";
export * from "../types/RebootRelationalDatabaseOutput";
export * from "../types/RebootRelationalDatabaseExceptionsUnion";

export class RebootRelationalDatabaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebootRelationalDatabaseInput,
      OutputTypesUnion,
      RebootRelationalDatabaseOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = RebootRelationalDatabase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebootRelationalDatabaseInput,
    RebootRelationalDatabaseOutput,
    Blob
  >();

  constructor(readonly input: RebootRelationalDatabaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RebootRelationalDatabaseInput,
    RebootRelationalDatabaseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebootRelationalDatabaseInput, RebootRelationalDatabaseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
