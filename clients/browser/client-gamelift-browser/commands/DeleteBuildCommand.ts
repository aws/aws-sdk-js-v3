import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBuild } from "../model/operations/DeleteBuild";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBuildInput } from "../types/DeleteBuildInput";
import { DeleteBuildOutput } from "../types/DeleteBuildOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DeleteBuildInput";
export * from "../types/DeleteBuildOutput";
export * from "../types/DeleteBuildExceptionsUnion";

export class DeleteBuildCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBuildInput,
      OutputTypesUnion,
      DeleteBuildOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteBuild;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBuildInput,
    DeleteBuildOutput,
    Blob
  >();

  constructor(readonly input: DeleteBuildInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBuildInput, DeleteBuildOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBuildInput, DeleteBuildOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
