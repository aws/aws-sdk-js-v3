import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateWorkteam } from "../model/UpdateWorkteam";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateWorkteamInput } from "../types/UpdateWorkteamInput";
import { UpdateWorkteamOutput } from "../types/UpdateWorkteamOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/UpdateWorkteamInput";
export * from "../types/UpdateWorkteamOutput";
export * from "../types/UpdateWorkteamExceptionsUnion";

export class UpdateWorkteamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateWorkteamInput,
      OutputTypesUnion,
      UpdateWorkteamOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateWorkteam;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateWorkteamInput,
    UpdateWorkteamOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateWorkteamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateWorkteamInput, UpdateWorkteamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateWorkteamInput, UpdateWorkteamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
