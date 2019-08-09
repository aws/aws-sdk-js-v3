import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDeployment } from "../model/UpdateDeployment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDeploymentInput } from "../types/UpdateDeploymentInput";
import { UpdateDeploymentOutput } from "../types/UpdateDeploymentOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/UpdateDeploymentInput";
export * from "../types/UpdateDeploymentOutput";
export * from "../types/UpdateDeploymentExceptionsUnion";

export class UpdateDeploymentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDeploymentInput,
      OutputTypesUnion,
      UpdateDeploymentOutput,
      ApiGatewayV2ResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDeployment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDeploymentInput,
    UpdateDeploymentOutput,
    Blob
  >();

  constructor(readonly input: UpdateDeploymentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDeploymentInput, UpdateDeploymentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDeploymentInput, UpdateDeploymentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
