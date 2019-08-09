import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeletePermissionPolicy } from "../model/DeletePermissionPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePermissionPolicyInput } from "../types/DeletePermissionPolicyInput";
import { DeletePermissionPolicyOutput } from "../types/DeletePermissionPolicyOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/DeletePermissionPolicyInput";
export * from "../types/DeletePermissionPolicyOutput";
export * from "../types/DeletePermissionPolicyExceptionsUnion";

export class DeletePermissionPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePermissionPolicyInput,
      OutputTypesUnion,
      DeletePermissionPolicyOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = DeletePermissionPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePermissionPolicyInput,
    DeletePermissionPolicyOutput,
    Blob
  >();

  constructor(readonly input: DeletePermissionPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePermissionPolicyInput,
    DeletePermissionPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePermissionPolicyInput, DeletePermissionPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
