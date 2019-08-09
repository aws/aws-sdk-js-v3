import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAccountPasswordPolicy } from "../model/DeleteAccountPasswordPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAccountPasswordPolicyInput } from "../types/DeleteAccountPasswordPolicyInput";
import { DeleteAccountPasswordPolicyOutput } from "../types/DeleteAccountPasswordPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteAccountPasswordPolicyInput";
export * from "../types/DeleteAccountPasswordPolicyOutput";
export * from "../types/DeleteAccountPasswordPolicyExceptionsUnion";

export class DeleteAccountPasswordPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAccountPasswordPolicyInput,
      OutputTypesUnion,
      DeleteAccountPasswordPolicyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAccountPasswordPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAccountPasswordPolicyInput,
    DeleteAccountPasswordPolicyOutput,
    Blob
  >();

  constructor(readonly input: DeleteAccountPasswordPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAccountPasswordPolicyInput,
    DeleteAccountPasswordPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteAccountPasswordPolicyInput,
        DeleteAccountPasswordPolicyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
