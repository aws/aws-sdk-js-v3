import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateServiceSpecificCredential } from "../model/operations/CreateServiceSpecificCredential";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateServiceSpecificCredentialInput } from "../types/CreateServiceSpecificCredentialInput";
import { CreateServiceSpecificCredentialOutput } from "../types/CreateServiceSpecificCredentialOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/CreateServiceSpecificCredentialInput";
export * from "../types/CreateServiceSpecificCredentialOutput";
export * from "../types/CreateServiceSpecificCredentialExceptionsUnion";

export class CreateServiceSpecificCredentialCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateServiceSpecificCredentialInput,
      OutputTypesUnion,
      CreateServiceSpecificCredentialOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = CreateServiceSpecificCredential;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateServiceSpecificCredentialInput,
    CreateServiceSpecificCredentialOutput,
    Blob
  >();

  constructor(readonly input: CreateServiceSpecificCredentialInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateServiceSpecificCredentialInput,
    CreateServiceSpecificCredentialOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateServiceSpecificCredentialInput,
        CreateServiceSpecificCredentialOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
