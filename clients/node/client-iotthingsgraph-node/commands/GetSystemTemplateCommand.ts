import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSystemTemplate } from "../model/operations/GetSystemTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSystemTemplateInput } from "../types/GetSystemTemplateInput";
import { GetSystemTemplateOutput } from "../types/GetSystemTemplateOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/GetSystemTemplateInput";
export * from "../types/GetSystemTemplateOutput";
export * from "../types/GetSystemTemplateExceptionsUnion";

export class GetSystemTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSystemTemplateInput,
      OutputTypesUnion,
      GetSystemTemplateOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSystemTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSystemTemplateInput,
    GetSystemTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSystemTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSystemTemplateInput, GetSystemTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSystemTemplateInput, GetSystemTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
