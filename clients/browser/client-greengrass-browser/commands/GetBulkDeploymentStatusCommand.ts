import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBulkDeploymentStatus } from "../model/GetBulkDeploymentStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBulkDeploymentStatusInput } from "../types/GetBulkDeploymentStatusInput";
import { GetBulkDeploymentStatusOutput } from "../types/GetBulkDeploymentStatusOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetBulkDeploymentStatusInput";
export * from "../types/GetBulkDeploymentStatusOutput";
export * from "../types/GetBulkDeploymentStatusExceptionsUnion";

export class GetBulkDeploymentStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBulkDeploymentStatusInput,
      OutputTypesUnion,
      GetBulkDeploymentStatusOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = GetBulkDeploymentStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBulkDeploymentStatusInput,
    GetBulkDeploymentStatusOutput,
    Blob
  >();

  constructor(readonly input: GetBulkDeploymentStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBulkDeploymentStatusInput,
    GetBulkDeploymentStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBulkDeploymentStatusInput, GetBulkDeploymentStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
