import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisconnectCustomKeyStore } from "../model/DisconnectCustomKeyStore";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisconnectCustomKeyStoreInput } from "../types/DisconnectCustomKeyStoreInput";
import { DisconnectCustomKeyStoreOutput } from "../types/DisconnectCustomKeyStoreOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/DisconnectCustomKeyStoreInput";
export * from "../types/DisconnectCustomKeyStoreOutput";
export * from "../types/DisconnectCustomKeyStoreExceptionsUnion";

export class DisconnectCustomKeyStoreCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisconnectCustomKeyStoreInput,
      OutputTypesUnion,
      DisconnectCustomKeyStoreOutput,
      KMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisconnectCustomKeyStore;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisconnectCustomKeyStoreInput,
    DisconnectCustomKeyStoreOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisconnectCustomKeyStoreInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisconnectCustomKeyStoreInput,
    DisconnectCustomKeyStoreOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisconnectCustomKeyStoreInput, DisconnectCustomKeyStoreOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
