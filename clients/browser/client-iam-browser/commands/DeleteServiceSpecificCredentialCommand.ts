import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteServiceSpecificCredential } from "../model/operations/DeleteServiceSpecificCredential";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteServiceSpecificCredentialInput } from "../types/DeleteServiceSpecificCredentialInput";
import { DeleteServiceSpecificCredentialOutput } from "../types/DeleteServiceSpecificCredentialOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteServiceSpecificCredentialInput";
export * from "../types/DeleteServiceSpecificCredentialOutput";
export * from "../types/DeleteServiceSpecificCredentialExceptionsUnion";

export class DeleteServiceSpecificCredentialCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteServiceSpecificCredentialInput,
      OutputTypesUnion,
      DeleteServiceSpecificCredentialOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteServiceSpecificCredential;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteServiceSpecificCredentialInput,
    DeleteServiceSpecificCredentialOutput,
    Blob
  >();

  constructor(readonly input: DeleteServiceSpecificCredentialInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteServiceSpecificCredentialInput,
    DeleteServiceSpecificCredentialOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteServiceSpecificCredentialInput,
        DeleteServiceSpecificCredentialOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
