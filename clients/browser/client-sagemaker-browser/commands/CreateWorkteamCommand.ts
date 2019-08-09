import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateWorkteam } from "../model/CreateWorkteam";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateWorkteamInput } from "../types/CreateWorkteamInput";
import { CreateWorkteamOutput } from "../types/CreateWorkteamOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateWorkteamInput";
export * from "../types/CreateWorkteamOutput";
export * from "../types/CreateWorkteamExceptionsUnion";

export class CreateWorkteamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateWorkteamInput,
      OutputTypesUnion,
      CreateWorkteamOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = CreateWorkteam;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateWorkteamInput,
    CreateWorkteamOutput,
    Blob
  >();

  constructor(readonly input: CreateWorkteamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateWorkteamInput, CreateWorkteamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateWorkteamInput, CreateWorkteamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
