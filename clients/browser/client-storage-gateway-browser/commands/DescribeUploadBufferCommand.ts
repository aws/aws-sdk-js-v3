import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeUploadBuffer } from "../model/operations/DescribeUploadBuffer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUploadBufferInput } from "../types/DescribeUploadBufferInput";
import { DescribeUploadBufferOutput } from "../types/DescribeUploadBufferOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeUploadBufferInput";
export * from "../types/DescribeUploadBufferOutput";
export * from "../types/DescribeUploadBufferExceptionsUnion";

export class DescribeUploadBufferCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUploadBufferInput,
      OutputTypesUnion,
      DescribeUploadBufferOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeUploadBuffer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUploadBufferInput,
    DescribeUploadBufferOutput,
    Blob
  >();

  constructor(readonly input: DescribeUploadBufferInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeUploadBufferInput,
    DescribeUploadBufferOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeUploadBufferInput, DescribeUploadBufferOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
