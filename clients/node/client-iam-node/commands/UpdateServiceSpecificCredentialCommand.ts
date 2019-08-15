import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateServiceSpecificCredential } from "../model/operations/UpdateServiceSpecificCredential";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateServiceSpecificCredentialInput } from "../types/UpdateServiceSpecificCredentialInput";
import { UpdateServiceSpecificCredentialOutput } from "../types/UpdateServiceSpecificCredentialOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateServiceSpecificCredentialInput";
export * from "../types/UpdateServiceSpecificCredentialOutput";
export * from "../types/UpdateServiceSpecificCredentialExceptionsUnion";

export class UpdateServiceSpecificCredentialCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateServiceSpecificCredentialInput,
      OutputTypesUnion,
      UpdateServiceSpecificCredentialOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateServiceSpecificCredential;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateServiceSpecificCredentialInput,
    UpdateServiceSpecificCredentialOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateServiceSpecificCredentialInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateServiceSpecificCredentialInput,
    UpdateServiceSpecificCredentialOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateServiceSpecificCredentialInput,
        UpdateServiceSpecificCredentialOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
