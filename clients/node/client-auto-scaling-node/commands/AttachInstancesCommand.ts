import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AttachInstances } from "../model/operations/AttachInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachInstancesInput } from "../types/AttachInstancesInput";
import { AttachInstancesOutput } from "../types/AttachInstancesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/AttachInstancesInput";
export * from "../types/AttachInstancesOutput";
export * from "../types/AttachInstancesExceptionsUnion";

export class AttachInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachInstancesInput,
      OutputTypesUnion,
      AttachInstancesOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AttachInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachInstancesInput,
    AttachInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: AttachInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachInstancesInput, AttachInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachInstancesInput, AttachInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
