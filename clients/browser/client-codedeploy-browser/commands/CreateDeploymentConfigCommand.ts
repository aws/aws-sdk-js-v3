import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDeploymentConfig } from "../model/operations/CreateDeploymentConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDeploymentConfigInput } from "../types/CreateDeploymentConfigInput";
import { CreateDeploymentConfigOutput } from "../types/CreateDeploymentConfigOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/CreateDeploymentConfigInput";
export * from "../types/CreateDeploymentConfigOutput";
export * from "../types/CreateDeploymentConfigExceptionsUnion";

export class CreateDeploymentConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDeploymentConfigInput,
      OutputTypesUnion,
      CreateDeploymentConfigOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDeploymentConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDeploymentConfigInput,
    CreateDeploymentConfigOutput,
    Blob
  >();

  constructor(readonly input: CreateDeploymentConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDeploymentConfigInput,
    CreateDeploymentConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDeploymentConfigInput, CreateDeploymentConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
