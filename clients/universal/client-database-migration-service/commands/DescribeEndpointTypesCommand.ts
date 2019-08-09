import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEndpointTypes } from "../model/DescribeEndpointTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEndpointTypesInput } from "../types/DescribeEndpointTypesInput";
import { DescribeEndpointTypesOutput } from "../types/DescribeEndpointTypesOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeEndpointTypesInput";
export * from "../types/DescribeEndpointTypesOutput";
export * from "../types/DescribeEndpointTypesExceptionsUnion";

export class DescribeEndpointTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEndpointTypesInput,
      OutputTypesUnion,
      DescribeEndpointTypesOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeEndpointTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEndpointTypesInput,
    DescribeEndpointTypesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEndpointTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEndpointTypesInput,
    DescribeEndpointTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEndpointTypesInput, DescribeEndpointTypesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
