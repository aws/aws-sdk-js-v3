import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSystemTemplate } from "../model/operations/DeleteSystemTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSystemTemplateInput } from "../types/DeleteSystemTemplateInput";
import { DeleteSystemTemplateOutput } from "../types/DeleteSystemTemplateOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/DeleteSystemTemplateInput";
export * from "../types/DeleteSystemTemplateOutput";
export * from "../types/DeleteSystemTemplateExceptionsUnion";

export class DeleteSystemTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSystemTemplateInput,
      OutputTypesUnion,
      DeleteSystemTemplateOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteSystemTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSystemTemplateInput,
    DeleteSystemTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSystemTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSystemTemplateInput,
    DeleteSystemTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSystemTemplateInput, DeleteSystemTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
