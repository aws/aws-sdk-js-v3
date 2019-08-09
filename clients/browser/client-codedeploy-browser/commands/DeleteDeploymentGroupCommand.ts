import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDeploymentGroup } from "../model/DeleteDeploymentGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDeploymentGroupInput } from "../types/DeleteDeploymentGroupInput";
import { DeleteDeploymentGroupOutput } from "../types/DeleteDeploymentGroupOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/DeleteDeploymentGroupInput";
export * from "../types/DeleteDeploymentGroupOutput";
export * from "../types/DeleteDeploymentGroupExceptionsUnion";

export class DeleteDeploymentGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDeploymentGroupInput,
      OutputTypesUnion,
      DeleteDeploymentGroupOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDeploymentGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDeploymentGroupInput,
    DeleteDeploymentGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteDeploymentGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDeploymentGroupInput,
    DeleteDeploymentGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDeploymentGroupInput, DeleteDeploymentGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
