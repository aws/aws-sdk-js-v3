import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeletePolicyVersion } from "../model/operations/DeletePolicyVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePolicyVersionInput } from "../types/DeletePolicyVersionInput";
import { DeletePolicyVersionOutput } from "../types/DeletePolicyVersionOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeletePolicyVersionInput";
export * from "../types/DeletePolicyVersionOutput";
export * from "../types/DeletePolicyVersionExceptionsUnion";

export class DeletePolicyVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePolicyVersionInput,
      OutputTypesUnion,
      DeletePolicyVersionOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = DeletePolicyVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePolicyVersionInput,
    DeletePolicyVersionOutput,
    Blob
  >();

  constructor(readonly input: DeletePolicyVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePolicyVersionInput,
    DeletePolicyVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePolicyVersionInput, DeletePolicyVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
