import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEnvironment } from "../model/operations/DeleteEnvironment";
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
      Blob
    > {
  readonly model = DeleteEnvironment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEnvironmentInput,
    DeleteEnvironmentOutput,
    Blob
  >();

  constructor(readonly input: DeleteEnvironmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
