import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateTemplate } from "../model/operations/UpdateTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTemplateInput } from "../types/UpdateTemplateInput";
import { UpdateTemplateOutput } from "../types/UpdateTemplateOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/UpdateTemplateInput";
export * from "../types/UpdateTemplateOutput";
export * from "../types/UpdateTemplateExceptionsUnion";

export class UpdateTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTemplateInput,
      OutputTypesUnion,
      UpdateTemplateOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTemplateInput,
    UpdateTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateTemplateInput, UpdateTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTemplateInput, UpdateTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
