import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDeploymentConfig } from "../model/DeleteDeploymentConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDeploymentConfigInput } from "../types/DeleteDeploymentConfigInput";
import { DeleteDeploymentConfigOutput } from "../types/DeleteDeploymentConfigOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/DeleteDeploymentConfigInput";
export * from "../types/DeleteDeploymentConfigOutput";
export * from "../types/DeleteDeploymentConfigExceptionsUnion";

export class DeleteDeploymentConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDeploymentConfigInput,
      OutputTypesUnion,
      DeleteDeploymentConfigOutput,
      CodeDeployResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDeploymentConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDeploymentConfigInput,
    DeleteDeploymentConfigOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDeploymentConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDeploymentConfigInput,
    DeleteDeploymentConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDeploymentConfigInput, DeleteDeploymentConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
