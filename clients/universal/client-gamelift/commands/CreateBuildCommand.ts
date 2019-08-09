import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateBuild } from "../model/CreateBuild";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBuildInput } from "../types/CreateBuildInput";
import { CreateBuildOutput } from "../types/CreateBuildOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/CreateBuildInput";
export * from "../types/CreateBuildOutput";
export * from "../types/CreateBuildExceptionsUnion";

export class CreateBuildCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBuildInput,
      OutputTypesUnion,
      CreateBuildOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateBuild;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBuildInput,
    CreateBuildOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateBuildInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateBuildInput, CreateBuildOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBuildInput, CreateBuildOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
