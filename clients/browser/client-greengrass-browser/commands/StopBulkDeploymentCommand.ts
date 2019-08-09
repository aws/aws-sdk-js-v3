import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopBulkDeployment } from "../model/StopBulkDeployment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopBulkDeploymentInput } from "../types/StopBulkDeploymentInput";
import { StopBulkDeploymentOutput } from "../types/StopBulkDeploymentOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/StopBulkDeploymentInput";
export * from "../types/StopBulkDeploymentOutput";
export * from "../types/StopBulkDeploymentExceptionsUnion";

export class StopBulkDeploymentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopBulkDeploymentInput,
      OutputTypesUnion,
      StopBulkDeploymentOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = StopBulkDeployment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopBulkDeploymentInput,
    StopBulkDeploymentOutput,
    Blob
  >();

  constructor(readonly input: StopBulkDeploymentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopBulkDeploymentInput,
    StopBulkDeploymentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopBulkDeploymentInput, StopBulkDeploymentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
