import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCloudFormationTemplate } from "../model/GetCloudFormationTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCloudFormationTemplateInput } from "../types/GetCloudFormationTemplateInput";
import { GetCloudFormationTemplateOutput } from "../types/GetCloudFormationTemplateOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/GetCloudFormationTemplateInput";
export * from "../types/GetCloudFormationTemplateOutput";
export * from "../types/GetCloudFormationTemplateExceptionsUnion";

export class GetCloudFormationTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCloudFormationTemplateInput,
      OutputTypesUnion,
      GetCloudFormationTemplateOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetCloudFormationTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCloudFormationTemplateInput,
    GetCloudFormationTemplateOutput,
    Uint8Array
  >();

  constructor(readonly input: GetCloudFormationTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCloudFormationTemplateInput,
    GetCloudFormationTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCloudFormationTemplateInput, GetCloudFormationTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
