import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeWorkingStorage } from "../model/DescribeWorkingStorage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeWorkingStorageInput } from "../types/DescribeWorkingStorageInput";
import { DescribeWorkingStorageOutput } from "../types/DescribeWorkingStorageOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeWorkingStorageInput";
export * from "../types/DescribeWorkingStorageOutput";
export * from "../types/DescribeWorkingStorageExceptionsUnion";

export class DescribeWorkingStorageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeWorkingStorageInput,
      OutputTypesUnion,
      DescribeWorkingStorageOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeWorkingStorage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeWorkingStorageInput,
    DescribeWorkingStorageOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeWorkingStorageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeWorkingStorageInput,
    DescribeWorkingStorageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeWorkingStorageInput, DescribeWorkingStorageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
