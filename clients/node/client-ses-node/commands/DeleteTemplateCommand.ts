import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteTemplate } from "../model/DeleteTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTemplateInput } from "../types/DeleteTemplateInput";
import { DeleteTemplateOutput } from "../types/DeleteTemplateOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DeleteTemplateInput";
export * from "../types/DeleteTemplateOutput";
export * from "../types/DeleteTemplateExceptionsUnion";

export class DeleteTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTemplateInput,
      OutputTypesUnion,
      DeleteTemplateOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTemplateInput,
    DeleteTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTemplateInput, DeleteTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTemplateInput, DeleteTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
