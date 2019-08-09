import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteComputeEnvironment } from "../model/DeleteComputeEnvironment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteComputeEnvironmentInput } from "../types/DeleteComputeEnvironmentInput";
import { DeleteComputeEnvironmentOutput } from "../types/DeleteComputeEnvironmentOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/DeleteComputeEnvironmentInput";
export * from "../types/DeleteComputeEnvironmentOutput";
export * from "../types/DeleteComputeEnvironmentExceptionsUnion";

export class DeleteComputeEnvironmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteComputeEnvironmentInput,
      OutputTypesUnion,
      DeleteComputeEnvironmentOutput,
      BatchResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteComputeEnvironment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteComputeEnvironmentInput,
    DeleteComputeEnvironmentOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteComputeEnvironmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteComputeEnvironmentInput,
    DeleteComputeEnvironmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteComputeEnvironmentInput, DeleteComputeEnvironmentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
