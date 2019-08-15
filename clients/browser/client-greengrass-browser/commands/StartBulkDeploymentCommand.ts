import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartBulkDeployment } from "../model/operations/StartBulkDeployment";
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
      Blob
    > {
  readonly model = StartBulkDeployment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartBulkDeploymentInput,
    StartBulkDeploymentOutput,
    Blob
  >();

  constructor(readonly input: StartBulkDeploymentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
