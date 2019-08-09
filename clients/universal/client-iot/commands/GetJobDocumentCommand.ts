import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetJobDocument } from "../model/GetJobDocument";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobDocumentInput } from "../types/GetJobDocumentInput";
import { GetJobDocumentOutput } from "../types/GetJobDocumentOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/GetJobDocumentInput";
export * from "../types/GetJobDocumentOutput";
export * from "../types/GetJobDocumentExceptionsUnion";

export class GetJobDocumentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobDocumentInput,
      OutputTypesUnion,
      GetJobDocumentOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetJobDocument;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobDocumentInput,
    GetJobDocumentOutput,
    Uint8Array
  >();

  constructor(readonly input: GetJobDocumentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobDocumentInput, GetJobDocumentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobDocumentInput, GetJobDocumentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
