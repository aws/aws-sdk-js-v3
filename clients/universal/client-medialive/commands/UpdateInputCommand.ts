import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateInput } from "../model/UpdateInput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateInputInput } from "../types/UpdateInputInput";
import { UpdateInputOutput } from "../types/UpdateInputOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/UpdateInputInput";
export * from "../types/UpdateInputOutput";
export * from "../types/UpdateInputExceptionsUnion";

export class UpdateInputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateInputInput,
      OutputTypesUnion,
      UpdateInputOutput,
      MediaLiveResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateInput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateInputInput,
    UpdateInputOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateInputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateInputInput, UpdateInputOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateInputInput, UpdateInputOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
