import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateConfigurationTemplate } from "../model/CreateConfigurationTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateConfigurationTemplateInput } from "../types/CreateConfigurationTemplateInput";
import { CreateConfigurationTemplateOutput } from "../types/CreateConfigurationTemplateOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/CreateConfigurationTemplateInput";
export * from "../types/CreateConfigurationTemplateOutput";
export * from "../types/CreateConfigurationTemplateExceptionsUnion";

export class CreateConfigurationTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateConfigurationTemplateInput,
      OutputTypesUnion,
      CreateConfigurationTemplateOutput,
      ElasticBeanstalkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateConfigurationTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateConfigurationTemplateInput,
    CreateConfigurationTemplateOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateConfigurationTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateConfigurationTemplateInput,
    CreateConfigurationTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateConfigurationTemplateInput,
        CreateConfigurationTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
