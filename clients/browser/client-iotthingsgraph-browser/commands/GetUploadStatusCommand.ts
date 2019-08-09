import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUploadStatus } from "../model/GetUploadStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUploadStatusInput } from "../types/GetUploadStatusInput";
import { GetUploadStatusOutput } from "../types/GetUploadStatusOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/GetUploadStatusInput";
export * from "../types/GetUploadStatusOutput";
export * from "../types/GetUploadStatusExceptionsUnion";

export class GetUploadStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUploadStatusInput,
      OutputTypesUnion,
      GetUploadStatusOutput,
      IoTThingsGraphResolvedConfiguration,
      Blob
    > {
  readonly model = GetUploadStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUploadStatusInput,
    GetUploadStatusOutput,
    Blob
  >();

  constructor(readonly input: GetUploadStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUploadStatusInput, GetUploadStatusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUploadStatusInput, GetUploadStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
