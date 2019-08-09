import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ValidateTemplate } from "../model/ValidateTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ValidateTemplateInput } from "../types/ValidateTemplateInput";
import { ValidateTemplateOutput } from "../types/ValidateTemplateOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/ValidateTemplateInput";
export * from "../types/ValidateTemplateOutput";
export * from "../types/ValidateTemplateExceptionsUnion";

export class ValidateTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ValidateTemplateInput,
      OutputTypesUnion,
      ValidateTemplateOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ValidateTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ValidateTemplateInput,
    ValidateTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: ValidateTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<ValidateTemplateInput, ValidateTemplateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ValidateTemplateInput, ValidateTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
