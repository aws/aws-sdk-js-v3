import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTemplate } from "../model/CreateTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTemplateInput } from "../types/CreateTemplateInput";
import { CreateTemplateOutput } from "../types/CreateTemplateOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/CreateTemplateInput";
export * from "../types/CreateTemplateOutput";
export * from "../types/CreateTemplateExceptionsUnion";

export class CreateTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTemplateInput,
      OutputTypesUnion,
      CreateTemplateOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTemplateInput,
    CreateTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTemplateInput, CreateTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTemplateInput, CreateTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
