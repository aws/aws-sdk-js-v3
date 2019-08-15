import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCloudFormationTemplate } from "../model/operations/CreateCloudFormationTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCloudFormationTemplateInput } from "../types/CreateCloudFormationTemplateInput";
import { CreateCloudFormationTemplateOutput } from "../types/CreateCloudFormationTemplateOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/CreateCloudFormationTemplateInput";
export * from "../types/CreateCloudFormationTemplateOutput";
export * from "../types/CreateCloudFormationTemplateExceptionsUnion";

export class CreateCloudFormationTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCloudFormationTemplateInput,
      OutputTypesUnion,
      CreateCloudFormationTemplateOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCloudFormationTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCloudFormationTemplateInput,
    CreateCloudFormationTemplateOutput,
    Blob
  >();

  constructor(readonly input: CreateCloudFormationTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCloudFormationTemplateInput,
    CreateCloudFormationTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateCloudFormationTemplateInput,
        CreateCloudFormationTemplateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
