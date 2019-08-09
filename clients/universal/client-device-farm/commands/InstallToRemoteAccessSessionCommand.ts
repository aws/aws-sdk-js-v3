import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InstallToRemoteAccessSession } from "../model/InstallToRemoteAccessSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InstallToRemoteAccessSessionInput } from "../types/InstallToRemoteAccessSessionInput";
import { InstallToRemoteAccessSessionOutput } from "../types/InstallToRemoteAccessSessionOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/InstallToRemoteAccessSessionInput";
export * from "../types/InstallToRemoteAccessSessionOutput";
export * from "../types/InstallToRemoteAccessSessionExceptionsUnion";

export class InstallToRemoteAccessSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InstallToRemoteAccessSessionInput,
      OutputTypesUnion,
      InstallToRemoteAccessSessionOutput,
      DeviceFarmResolvedConfiguration,
      Uint8Array
    > {
  readonly model = InstallToRemoteAccessSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InstallToRemoteAccessSessionInput,
    InstallToRemoteAccessSessionOutput,
    Uint8Array
  >();

  constructor(readonly input: InstallToRemoteAccessSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    InstallToRemoteAccessSessionInput,
    InstallToRemoteAccessSessionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        InstallToRemoteAccessSessionInput,
        InstallToRemoteAccessSessionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
