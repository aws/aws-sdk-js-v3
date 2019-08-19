import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRemoteAccessSession } from "../model/operations/CreateRemoteAccessSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRemoteAccessSessionInput } from "../types/CreateRemoteAccessSessionInput";
import { CreateRemoteAccessSessionOutput } from "../types/CreateRemoteAccessSessionOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/CreateRemoteAccessSessionInput";
export * from "../types/CreateRemoteAccessSessionOutput";
export * from "../types/CreateRemoteAccessSessionExceptionsUnion";

export class CreateRemoteAccessSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRemoteAccessSessionInput,
      OutputTypesUnion,
      CreateRemoteAccessSessionOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = CreateRemoteAccessSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRemoteAccessSessionInput,
    CreateRemoteAccessSessionOutput,
    Blob
  >();

  constructor(readonly input: CreateRemoteAccessSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateRemoteAccessSessionInput,
    CreateRemoteAccessSessionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRemoteAccessSessionInput, CreateRemoteAccessSessionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
