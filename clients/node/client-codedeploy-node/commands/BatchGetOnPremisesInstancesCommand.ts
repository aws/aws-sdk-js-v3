import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetOnPremisesInstances } from "../model/operations/BatchGetOnPremisesInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetOnPremisesInstancesInput } from "../types/BatchGetOnPremisesInstancesInput";
import { BatchGetOnPremisesInstancesOutput } from "../types/BatchGetOnPremisesInstancesOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/BatchGetOnPremisesInstancesInput";
export * from "../types/BatchGetOnPremisesInstancesOutput";
export * from "../types/BatchGetOnPremisesInstancesExceptionsUnion";

export class BatchGetOnPremisesInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetOnPremisesInstancesInput,
      OutputTypesUnion,
      BatchGetOnPremisesInstancesOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetOnPremisesInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetOnPremisesInstancesInput,
    BatchGetOnPremisesInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetOnPremisesInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetOnPremisesInstancesInput,
    BatchGetOnPremisesInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchGetOnPremisesInstancesInput,
        BatchGetOnPremisesInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
