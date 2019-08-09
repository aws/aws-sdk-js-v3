import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSystemTemplateRevisions } from "../model/GetSystemTemplateRevisions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSystemTemplateRevisionsInput } from "../types/GetSystemTemplateRevisionsInput";
import { GetSystemTemplateRevisionsOutput } from "../types/GetSystemTemplateRevisionsOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/GetSystemTemplateRevisionsInput";
export * from "../types/GetSystemTemplateRevisionsOutput";
export * from "../types/GetSystemTemplateRevisionsExceptionsUnion";

export class GetSystemTemplateRevisionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSystemTemplateRevisionsInput,
      OutputTypesUnion,
      GetSystemTemplateRevisionsOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSystemTemplateRevisions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSystemTemplateRevisionsInput,
    GetSystemTemplateRevisionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSystemTemplateRevisionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSystemTemplateRevisionsInput,
    GetSystemTemplateRevisionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetSystemTemplateRevisionsInput,
        GetSystemTemplateRevisionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
