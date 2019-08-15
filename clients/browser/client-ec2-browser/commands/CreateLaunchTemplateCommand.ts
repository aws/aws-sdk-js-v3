import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateLaunchTemplate } from "../model/operations/CreateLaunchTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLaunchTemplateInput } from "../types/CreateLaunchTemplateInput";
import { CreateLaunchTemplateOutput } from "../types/CreateLaunchTemplateOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateLaunchTemplateInput";
export * from "../types/CreateLaunchTemplateOutput";
export * from "../types/CreateLaunchTemplateExceptionsUnion";

export class CreateLaunchTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLaunchTemplateInput,
      OutputTypesUnion,
      CreateLaunchTemplateOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateLaunchTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLaunchTemplateInput,
    CreateLaunchTemplateOutput,
    Blob
  >();

  constructor(readonly input: CreateLaunchTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLaunchTemplateInput,
    CreateLaunchTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLaunchTemplateInput, CreateLaunchTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
