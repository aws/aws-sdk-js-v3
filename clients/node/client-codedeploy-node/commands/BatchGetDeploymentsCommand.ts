import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetDeployments } from "../model/operations/BatchGetDeployments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetDeploymentsInput } from "../types/BatchGetDeploymentsInput";
import { BatchGetDeploymentsOutput } from "../types/BatchGetDeploymentsOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/BatchGetDeploymentsInput";
export * from "../types/BatchGetDeploymentsOutput";
export * from "../types/BatchGetDeploymentsExceptionsUnion";

export class BatchGetDeploymentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetDeploymentsInput,
      OutputTypesUnion,
      BatchGetDeploymentsOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetDeployments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetDeploymentsInput,
    BatchGetDeploymentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetDeploymentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetDeploymentsInput,
    BatchGetDeploymentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetDeploymentsInput, BatchGetDeploymentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
