import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddUploadBuffer } from "../model/AddUploadBuffer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddUploadBufferInput } from "../types/AddUploadBufferInput";
import { AddUploadBufferOutput } from "../types/AddUploadBufferOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/AddUploadBufferInput";
export * from "../types/AddUploadBufferOutput";
export * from "../types/AddUploadBufferExceptionsUnion";

export class AddUploadBufferCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddUploadBufferInput,
      OutputTypesUnion,
      AddUploadBufferOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddUploadBuffer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddUploadBufferInput,
    AddUploadBufferOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddUploadBufferInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<AddUploadBufferInput, AddUploadBufferOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddUploadBufferInput, AddUploadBufferOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
