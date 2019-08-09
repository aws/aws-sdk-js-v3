import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateConfigurationTemplate } from "../model/UpdateConfigurationTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConfigurationTemplateInput } from "../types/UpdateConfigurationTemplateInput";
import { UpdateConfigurationTemplateOutput } from "../types/UpdateConfigurationTemplateOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/UpdateConfigurationTemplateInput";
export * from "../types/UpdateConfigurationTemplateOutput";
export * from "../types/UpdateConfigurationTemplateExceptionsUnion";

export class UpdateConfigurationTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConfigurationTemplateInput,
      OutputTypesUnion,
      UpdateConfigurationTemplateOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateConfigurationTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConfigurationTemplateInput,
    UpdateConfigurationTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateConfigurationTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateConfigurationTemplateInput,
    UpdateConfigurationTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateConfigurationTemplateInput,
        UpdateConfigurationTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
