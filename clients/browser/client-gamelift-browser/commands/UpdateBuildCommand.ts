import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateBuild } from "../model/UpdateBuild";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBuildInput } from "../types/UpdateBuildInput";
import { UpdateBuildOutput } from "../types/UpdateBuildOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/UpdateBuildInput";
export * from "../types/UpdateBuildOutput";
export * from "../types/UpdateBuildExceptionsUnion";

export class UpdateBuildCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBuildInput,
      OutputTypesUnion,
      UpdateBuildOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateBuild;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBuildInput,
    UpdateBuildOutput,
    Blob
  >();

  constructor(readonly input: UpdateBuildInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateBuildInput, UpdateBuildOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBuildInput, UpdateBuildOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
