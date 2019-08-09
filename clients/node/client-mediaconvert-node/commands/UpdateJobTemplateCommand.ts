import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateJobTemplate } from "../model/UpdateJobTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateJobTemplateInput } from "../types/UpdateJobTemplateInput";
import { UpdateJobTemplateOutput } from "../types/UpdateJobTemplateOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/UpdateJobTemplateInput";
export * from "../types/UpdateJobTemplateOutput";
export * from "../types/UpdateJobTemplateExceptionsUnion";

export class UpdateJobTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateJobTemplateInput,
      OutputTypesUnion,
      UpdateJobTemplateOutput,
      MediaConvertResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateJobTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateJobTemplateInput,
    UpdateJobTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateJobTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateJobTemplateInput, UpdateJobTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateJobTemplateInput, UpdateJobTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
