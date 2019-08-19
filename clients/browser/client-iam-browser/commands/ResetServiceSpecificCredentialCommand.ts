import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetServiceSpecificCredential } from "../model/operations/ResetServiceSpecificCredential";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetServiceSpecificCredentialInput } from "../types/ResetServiceSpecificCredentialInput";
import { ResetServiceSpecificCredentialOutput } from "../types/ResetServiceSpecificCredentialOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ResetServiceSpecificCredentialInput";
export * from "../types/ResetServiceSpecificCredentialOutput";
export * from "../types/ResetServiceSpecificCredentialExceptionsUnion";

export class ResetServiceSpecificCredentialCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetServiceSpecificCredentialInput,
      OutputTypesUnion,
      ResetServiceSpecificCredentialOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = ResetServiceSpecificCredential;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetServiceSpecificCredentialInput,
    ResetServiceSpecificCredentialOutput,
    Blob
  >();

  constructor(readonly input: ResetServiceSpecificCredentialInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetServiceSpecificCredentialInput,
    ResetServiceSpecificCredentialOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ResetServiceSpecificCredentialInput,
        ResetServiceSpecificCredentialOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
