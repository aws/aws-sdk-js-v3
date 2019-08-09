import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartDeployment } from "../model/StartDeployment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartDeploymentInput } from "../types/StartDeploymentInput";
import { StartDeploymentOutput } from "../types/StartDeploymentOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/StartDeploymentInput";
export * from "../types/StartDeploymentOutput";
export * from "../types/StartDeploymentExceptionsUnion";

export class StartDeploymentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartDeploymentInput,
      OutputTypesUnion,
      StartDeploymentOutput,
      AmplifyResolvedConfiguration,
      Blob
    > {
  readonly model = StartDeployment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartDeploymentInput,
    StartDeploymentOutput,
    Blob
  >();

  constructor(readonly input: StartDeploymentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<StartDeploymentInput, StartDeploymentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartDeploymentInput, StartDeploymentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
