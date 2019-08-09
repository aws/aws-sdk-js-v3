import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateNetworkProfile } from "../model/CreateNetworkProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNetworkProfileInput } from "../types/CreateNetworkProfileInput";
import { CreateNetworkProfileOutput } from "../types/CreateNetworkProfileOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/CreateNetworkProfileInput";
export * from "../types/CreateNetworkProfileOutput";
export * from "../types/CreateNetworkProfileExceptionsUnion";

export class CreateNetworkProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNetworkProfileInput,
      OutputTypesUnion,
      CreateNetworkProfileOutput,
      DeviceFarmResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateNetworkProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNetworkProfileInput,
    CreateNetworkProfileOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateNetworkProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateNetworkProfileInput,
    CreateNetworkProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNetworkProfileInput, CreateNetworkProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
