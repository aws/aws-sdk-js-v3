import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteIdentityPolicy } from "../model/DeleteIdentityPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIdentityPolicyInput } from "../types/DeleteIdentityPolicyInput";
import { DeleteIdentityPolicyOutput } from "../types/DeleteIdentityPolicyOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DeleteIdentityPolicyInput";
export * from "../types/DeleteIdentityPolicyOutput";
export * from "../types/DeleteIdentityPolicyExceptionsUnion";

export class DeleteIdentityPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIdentityPolicyInput,
      OutputTypesUnion,
      DeleteIdentityPolicyOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteIdentityPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIdentityPolicyInput,
    DeleteIdentityPolicyOutput,
    Blob
  >();

  constructor(readonly input: DeleteIdentityPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteIdentityPolicyInput,
    DeleteIdentityPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIdentityPolicyInput, DeleteIdentityPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
