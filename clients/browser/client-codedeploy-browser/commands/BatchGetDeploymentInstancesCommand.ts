import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchGetDeploymentInstances } from "../model/operations/BatchGetDeploymentInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetDeploymentInstancesInput } from "../types/BatchGetDeploymentInstancesInput";
import { BatchGetDeploymentInstancesOutput } from "../types/BatchGetDeploymentInstancesOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/BatchGetDeploymentInstancesInput";
export * from "../types/BatchGetDeploymentInstancesOutput";
export * from "../types/BatchGetDeploymentInstancesExceptionsUnion";

export class BatchGetDeploymentInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetDeploymentInstancesInput,
      OutputTypesUnion,
      BatchGetDeploymentInstancesOutput,
      CodeDeployResolvedConfiguration,
      Blob
    > {
  readonly model = BatchGetDeploymentInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetDeploymentInstancesInput,
    BatchGetDeploymentInstancesOutput,
    Blob
  >();

  constructor(readonly input: BatchGetDeploymentInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetDeploymentInstancesInput,
    BatchGetDeploymentInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchGetDeploymentInstancesInput,
        BatchGetDeploymentInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
