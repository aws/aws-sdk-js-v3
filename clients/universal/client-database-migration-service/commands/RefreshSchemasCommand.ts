import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RefreshSchemas } from "../model/RefreshSchemas";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RefreshSchemasInput } from "../types/RefreshSchemasInput";
import { RefreshSchemasOutput } from "../types/RefreshSchemasOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/RefreshSchemasInput";
export * from "../types/RefreshSchemasOutput";
export * from "../types/RefreshSchemasExceptionsUnion";

export class RefreshSchemasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RefreshSchemasInput,
      OutputTypesUnion,
      RefreshSchemasOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RefreshSchemas;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RefreshSchemasInput,
    RefreshSchemasOutput,
    Uint8Array
  >();

  constructor(readonly input: RefreshSchemasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<RefreshSchemasInput, RefreshSchemasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RefreshSchemasInput, RefreshSchemasOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
