import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteJobTemplate } from "../model/DeleteJobTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteJobTemplateInput } from "../types/DeleteJobTemplateInput";
import { DeleteJobTemplateOutput } from "../types/DeleteJobTemplateOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/DeleteJobTemplateInput";
export * from "../types/DeleteJobTemplateOutput";
export * from "../types/DeleteJobTemplateExceptionsUnion";

export class DeleteJobTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteJobTemplateInput,
      OutputTypesUnion,
      DeleteJobTemplateOutput,
      MediaConvertResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteJobTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteJobTemplateInput,
    DeleteJobTemplateOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteJobTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteJobTemplateInput, DeleteJobTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteJobTemplateInput, DeleteJobTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
