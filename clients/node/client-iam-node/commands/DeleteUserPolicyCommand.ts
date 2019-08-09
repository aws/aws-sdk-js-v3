import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteUserPolicy } from "../model/DeleteUserPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUserPolicyInput } from "../types/DeleteUserPolicyInput";
import { DeleteUserPolicyOutput } from "../types/DeleteUserPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteUserPolicyInput";
export * from "../types/DeleteUserPolicyOutput";
export * from "../types/DeleteUserPolicyExceptionsUnion";

export class DeleteUserPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUserPolicyInput,
      OutputTypesUnion,
      DeleteUserPolicyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteUserPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUserPolicyInput,
    DeleteUserPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteUserPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteUserPolicyInput, DeleteUserPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteUserPolicyInput, DeleteUserPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
