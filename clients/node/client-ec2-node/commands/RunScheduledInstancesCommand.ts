import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RunScheduledInstances } from "../model/RunScheduledInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RunScheduledInstancesInput } from "../types/RunScheduledInstancesInput";
import { RunScheduledInstancesOutput } from "../types/RunScheduledInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RunScheduledInstancesInput";
export * from "../types/RunScheduledInstancesOutput";
export * from "../types/RunScheduledInstancesExceptionsUnion";

export class RunScheduledInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RunScheduledInstancesInput,
      OutputTypesUnion,
      RunScheduledInstancesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RunScheduledInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RunScheduledInstancesInput,
    RunScheduledInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: RunScheduledInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RunScheduledInstancesInput,
    RunScheduledInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RunScheduledInstancesInput, RunScheduledInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
