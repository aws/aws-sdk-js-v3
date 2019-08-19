import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateComputeEnvironment } from "../model/operations/UpdateComputeEnvironment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateComputeEnvironmentInput } from "../types/UpdateComputeEnvironmentInput";
import { UpdateComputeEnvironmentOutput } from "../types/UpdateComputeEnvironmentOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/UpdateComputeEnvironmentInput";
export * from "../types/UpdateComputeEnvironmentOutput";
export * from "../types/UpdateComputeEnvironmentExceptionsUnion";

export class UpdateComputeEnvironmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateComputeEnvironmentInput,
      OutputTypesUnion,
      UpdateComputeEnvironmentOutput,
      BatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateComputeEnvironment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateComputeEnvironmentInput,
    UpdateComputeEnvironmentOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateComputeEnvironmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateComputeEnvironmentInput,
    UpdateComputeEnvironmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateComputeEnvironmentInput, UpdateComputeEnvironmentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
