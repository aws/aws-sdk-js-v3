import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConnections } from "../model/DescribeConnections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConnectionsInput } from "../types/DescribeConnectionsInput";
import { DescribeConnectionsOutput } from "../types/DescribeConnectionsOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeConnectionsInput";
export * from "../types/DescribeConnectionsOutput";
export * from "../types/DescribeConnectionsExceptionsUnion";

export class DescribeConnectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConnectionsInput,
      OutputTypesUnion,
      DescribeConnectionsOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeConnections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConnectionsInput,
    DescribeConnectionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeConnectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConnectionsInput,
    DescribeConnectionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeConnectionsInput, DescribeConnectionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
