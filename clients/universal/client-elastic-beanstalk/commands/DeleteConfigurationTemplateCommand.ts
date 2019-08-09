import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteConfigurationTemplate } from "../model/DeleteConfigurationTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConfigurationTemplateInput } from "../types/DeleteConfigurationTemplateInput";
import { DeleteConfigurationTemplateOutput } from "../types/DeleteConfigurationTemplateOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DeleteConfigurationTemplateInput";
export * from "../types/DeleteConfigurationTemplateOutput";
export * from "../types/DeleteConfigurationTemplateExceptionsUnion";

export class DeleteConfigurationTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConfigurationTemplateInput,
      OutputTypesUnion,
      DeleteConfigurationTemplateOutput,
      ElasticBeanstalkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteConfigurationTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConfigurationTemplateInput,
    DeleteConfigurationTemplateOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteConfigurationTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteConfigurationTemplateInput,
    DeleteConfigurationTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteConfigurationTemplateInput,
        DeleteConfigurationTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
