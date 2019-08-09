import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RunInstances } from "../model/RunInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RunInstancesInput } from "../types/RunInstancesInput";
import { RunInstancesOutput } from "../types/RunInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RunInstancesInput";
export * from "../types/RunInstancesOutput";
export * from "../types/RunInstancesExceptionsUnion";

export class RunInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RunInstancesInput,
      OutputTypesUnion,
      RunInstancesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = RunInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RunInstancesInput,
    RunInstancesOutput,
    Blob
  >();

  constructor(readonly input: RunInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<RunInstancesInput, RunInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RunInstancesInput, RunInstancesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
