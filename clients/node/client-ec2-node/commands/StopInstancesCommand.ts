import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopInstances } from "../model/StopInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopInstancesInput } from "../types/StopInstancesInput";
import { StopInstancesOutput } from "../types/StopInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/StopInstancesInput";
export * from "../types/StopInstancesOutput";
export * from "../types/StopInstancesExceptionsUnion";

export class StopInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopInstancesInput,
      OutputTypesUnion,
      StopInstancesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopInstancesInput,
    StopInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<StopInstancesInput, StopInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopInstancesInput, StopInstancesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
