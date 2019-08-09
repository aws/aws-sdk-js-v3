import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateComputeEnvironment } from "../model/CreateComputeEnvironment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateComputeEnvironmentInput } from "../types/CreateComputeEnvironmentInput";
import { CreateComputeEnvironmentOutput } from "../types/CreateComputeEnvironmentOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/CreateComputeEnvironmentInput";
export * from "../types/CreateComputeEnvironmentOutput";
export * from "../types/CreateComputeEnvironmentExceptionsUnion";

export class CreateComputeEnvironmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateComputeEnvironmentInput,
      OutputTypesUnion,
      CreateComputeEnvironmentOutput,
      BatchResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateComputeEnvironment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateComputeEnvironmentInput,
    CreateComputeEnvironmentOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateComputeEnvironmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateComputeEnvironmentInput,
    CreateComputeEnvironmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateComputeEnvironmentInput, CreateComputeEnvironmentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
