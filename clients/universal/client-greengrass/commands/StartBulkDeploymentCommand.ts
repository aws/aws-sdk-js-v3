import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartBulkDeployment } from "../model/StartBulkDeployment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartBulkDeploymentInput } from "../types/StartBulkDeploymentInput";
import { StartBulkDeploymentOutput } from "../types/StartBulkDeploymentOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/StartBulkDeploymentInput";
export * from "../types/StartBulkDeploymentOutput";
export * from "../types/StartBulkDeploymentExceptionsUnion";

export class StartBulkDeploymentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartBulkDeploymentInput,
      OutputTypesUnion,
      StartBulkDeploymentOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartBulkDeployment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartBulkDeploymentInput,
    StartBulkDeploymentOutput,
    Uint8Array
  >();

  constructor(readonly input: StartBulkDeploymentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartBulkDeploymentInput,
    StartBulkDeploymentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartBulkDeploymentInput, StartBulkDeploymentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
