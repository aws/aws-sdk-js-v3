import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateCustomKeyStore } from "../model/UpdateCustomKeyStore";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCustomKeyStoreInput } from "../types/UpdateCustomKeyStoreInput";
import { UpdateCustomKeyStoreOutput } from "../types/UpdateCustomKeyStoreOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/UpdateCustomKeyStoreInput";
export * from "../types/UpdateCustomKeyStoreOutput";
export * from "../types/UpdateCustomKeyStoreExceptionsUnion";

export class UpdateCustomKeyStoreCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCustomKeyStoreInput,
      OutputTypesUnion,
      UpdateCustomKeyStoreOutput,
      KMSResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateCustomKeyStore;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCustomKeyStoreInput,
    UpdateCustomKeyStoreOutput,
    Blob
  >();

  constructor(readonly input: UpdateCustomKeyStoreInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateCustomKeyStoreInput,
    UpdateCustomKeyStoreOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateCustomKeyStoreInput, UpdateCustomKeyStoreOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
