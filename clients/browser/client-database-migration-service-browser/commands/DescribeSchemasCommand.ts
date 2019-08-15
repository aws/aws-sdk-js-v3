import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSchemas } from "../model/operations/DescribeSchemas";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSchemasInput } from "../types/DescribeSchemasInput";
import { DescribeSchemasOutput } from "../types/DescribeSchemasOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeSchemasInput";
export * from "../types/DescribeSchemasOutput";
export * from "../types/DescribeSchemasExceptionsUnion";

export class DescribeSchemasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSchemasInput,
      OutputTypesUnion,
      DescribeSchemasOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSchemas;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSchemasInput,
    DescribeSchemasOutput,
    Blob
  >();

  constructor(readonly input: DescribeSchemasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeSchemasInput, DescribeSchemasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSchemasInput, DescribeSchemasOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
