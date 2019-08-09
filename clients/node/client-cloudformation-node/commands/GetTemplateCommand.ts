import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTemplate } from "../model/GetTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTemplateInput } from "../types/GetTemplateInput";
import { GetTemplateOutput } from "../types/GetTemplateOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/GetTemplateInput";
export * from "../types/GetTemplateOutput";
export * from "../types/GetTemplateExceptionsUnion";

export class GetTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTemplateInput,
      OutputTypesUnion,
      GetTemplateOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTemplateInput,
    GetTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTemplateInput, GetTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTemplateInput, GetTemplateOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
