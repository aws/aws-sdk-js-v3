import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteOTAUpdate } from "../model/operations/DeleteOTAUpdate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteOTAUpdateInput } from "../types/DeleteOTAUpdateInput";
import { DeleteOTAUpdateOutput } from "../types/DeleteOTAUpdateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteOTAUpdateInput";
export * from "../types/DeleteOTAUpdateOutput";
export * from "../types/DeleteOTAUpdateExceptionsUnion";

export class DeleteOTAUpdateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteOTAUpdateInput,
      OutputTypesUnion,
      DeleteOTAUpdateOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteOTAUpdate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteOTAUpdateInput,
    DeleteOTAUpdateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteOTAUpdateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteOTAUpdateInput, DeleteOTAUpdateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteOTAUpdateInput, DeleteOTAUpdateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
