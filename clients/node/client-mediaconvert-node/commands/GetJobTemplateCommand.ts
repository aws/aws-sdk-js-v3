import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetJobTemplate } from "../model/operations/GetJobTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobTemplateInput } from "../types/GetJobTemplateInput";
import { GetJobTemplateOutput } from "../types/GetJobTemplateOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/GetJobTemplateInput";
export * from "../types/GetJobTemplateOutput";
export * from "../types/GetJobTemplateExceptionsUnion";

export class GetJobTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobTemplateInput,
      OutputTypesUnion,
      GetJobTemplateOutput,
      MediaConvertResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetJobTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobTemplateInput,
    GetJobTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetJobTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobTemplateInput, GetJobTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobTemplateInput, GetJobTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
