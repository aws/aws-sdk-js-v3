import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRefreshSchemasStatus } from "../model/DescribeRefreshSchemasStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRefreshSchemasStatusInput } from "../types/DescribeRefreshSchemasStatusInput";
import { DescribeRefreshSchemasStatusOutput } from "../types/DescribeRefreshSchemasStatusOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeRefreshSchemasStatusInput";
export * from "../types/DescribeRefreshSchemasStatusOutput";
export * from "../types/DescribeRefreshSchemasStatusExceptionsUnion";

export class DescribeRefreshSchemasStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRefreshSchemasStatusInput,
      OutputTypesUnion,
      DescribeRefreshSchemasStatusOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeRefreshSchemasStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRefreshSchemasStatusInput,
    DescribeRefreshSchemasStatusOutput,
    Blob
  >();

  constructor(readonly input: DescribeRefreshSchemasStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRefreshSchemasStatusInput,
    DescribeRefreshSchemasStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeRefreshSchemasStatusInput,
        DescribeRefreshSchemasStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
