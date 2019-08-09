import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetDeploymentGroups } from "../model/BatchGetDeploymentGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetDeploymentGroupsInput } from "../types/BatchGetDeploymentGroupsInput";
import { BatchGetDeploymentGroupsOutput } from "../types/BatchGetDeploymentGroupsOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/BatchGetDeploymentGroupsInput";
export * from "../types/BatchGetDeploymentGroupsOutput";
export * from "../types/BatchGetDeploymentGroupsExceptionsUnion";

export class BatchGetDeploymentGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetDeploymentGroupsInput,
      OutputTypesUnion,
      BatchGetDeploymentGroupsOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetDeploymentGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetDeploymentGroupsInput,
    BatchGetDeploymentGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetDeploymentGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetDeploymentGroupsInput,
    BatchGetDeploymentGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetDeploymentGroupsInput, BatchGetDeploymentGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
