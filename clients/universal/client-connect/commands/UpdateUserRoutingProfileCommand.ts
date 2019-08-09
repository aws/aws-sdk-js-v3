import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateUserRoutingProfile } from "../model/UpdateUserRoutingProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUserRoutingProfileInput } from "../types/UpdateUserRoutingProfileInput";
import { UpdateUserRoutingProfileOutput } from "../types/UpdateUserRoutingProfileOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/UpdateUserRoutingProfileInput";
export * from "../types/UpdateUserRoutingProfileOutput";
export * from "../types/UpdateUserRoutingProfileExceptionsUnion";

export class UpdateUserRoutingProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUserRoutingProfileInput,
      OutputTypesUnion,
      UpdateUserRoutingProfileOutput,
      ConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateUserRoutingProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserRoutingProfileInput,
    UpdateUserRoutingProfileOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateUserRoutingProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateUserRoutingProfileInput,
    UpdateUserRoutingProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUserRoutingProfileInput, UpdateUserRoutingProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
