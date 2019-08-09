import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEnvironment } from "../model/DeleteEnvironment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEnvironmentInput } from "../types/DeleteEnvironmentInput";
import { DeleteEnvironmentOutput } from "../types/DeleteEnvironmentOutput";
import { Cloud9ResolvedConfiguration } from "../Cloud9Configuration";
export * from "../types/DeleteEnvironmentInput";
export * from "../types/DeleteEnvironmentOutput";
export * from "../types/DeleteEnvironmentExceptionsUnion";

export class DeleteEnvironmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEnvironmentInput,
      OutputTypesUnion,
      DeleteEnvironmentOutput,
      Cloud9ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteEnvironment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEnvironmentInput,
    DeleteEnvironmentOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteEnvironmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Cloud9ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteEnvironmentInput, DeleteEnvironmentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEnvironmentInput, DeleteEnvironmentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
