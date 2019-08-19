import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetFileUploadURL } from "../model/operations/GetFileUploadURL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFileUploadURLInput } from "../types/GetFileUploadURLInput";
import { GetFileUploadURLOutput } from "../types/GetFileUploadURLOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/GetFileUploadURLInput";
export * from "../types/GetFileUploadURLOutput";
export * from "../types/GetFileUploadURLExceptionsUnion";

export class GetFileUploadURLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFileUploadURLInput,
      OutputTypesUnion,
      GetFileUploadURLOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetFileUploadURL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFileUploadURLInput,
    GetFileUploadURLOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetFileUploadURLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<GetFileUploadURLInput, GetFileUploadURLOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFileUploadURLInput, GetFileUploadURLOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
