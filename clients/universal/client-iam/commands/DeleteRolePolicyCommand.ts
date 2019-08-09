import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRolePolicy } from "../model/DeleteRolePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRolePolicyInput } from "../types/DeleteRolePolicyInput";
import { DeleteRolePolicyOutput } from "../types/DeleteRolePolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteRolePolicyInput";
export * from "../types/DeleteRolePolicyOutput";
export * from "../types/DeleteRolePolicyExceptionsUnion";

export class DeleteRolePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRolePolicyInput,
      OutputTypesUnion,
      DeleteRolePolicyOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteRolePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRolePolicyInput,
    DeleteRolePolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteRolePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRolePolicyInput, DeleteRolePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRolePolicyInput, DeleteRolePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
