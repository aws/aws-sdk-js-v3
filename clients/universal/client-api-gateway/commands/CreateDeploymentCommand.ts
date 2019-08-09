import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDeployment } from "../model/CreateDeployment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDeploymentInput } from "../types/CreateDeploymentInput";
import { CreateDeploymentOutput } from "../types/CreateDeploymentOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateDeploymentInput";
export * from "../types/CreateDeploymentOutput";
export * from "../types/CreateDeploymentExceptionsUnion";

export class CreateDeploymentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDeploymentInput,
      OutputTypesUnion,
      CreateDeploymentOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateDeployment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDeploymentInput,
    CreateDeploymentOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateDeploymentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDeploymentInput, CreateDeploymentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDeploymentInput, CreateDeploymentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
