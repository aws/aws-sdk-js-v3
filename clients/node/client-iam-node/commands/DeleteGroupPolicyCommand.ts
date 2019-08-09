import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteGroupPolicy } from "../model/DeleteGroupPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGroupPolicyInput } from "../types/DeleteGroupPolicyInput";
import { DeleteGroupPolicyOutput } from "../types/DeleteGroupPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteGroupPolicyInput";
export * from "../types/DeleteGroupPolicyOutput";
export * from "../types/DeleteGroupPolicyExceptionsUnion";

export class DeleteGroupPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGroupPolicyInput,
      OutputTypesUnion,
      DeleteGroupPolicyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteGroupPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGroupPolicyInput,
    DeleteGroupPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteGroupPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteGroupPolicyInput, DeleteGroupPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGroupPolicyInput, DeleteGroupPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
