import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRepositoryPolicy } from "../model/operations/DeleteRepositoryPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRepositoryPolicyInput } from "../types/DeleteRepositoryPolicyInput";
import { DeleteRepositoryPolicyOutput } from "../types/DeleteRepositoryPolicyOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/DeleteRepositoryPolicyInput";
export * from "../types/DeleteRepositoryPolicyOutput";
export * from "../types/DeleteRepositoryPolicyExceptionsUnion";

export class DeleteRepositoryPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRepositoryPolicyInput,
      OutputTypesUnion,
      DeleteRepositoryPolicyOutput,
      ECRResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRepositoryPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRepositoryPolicyInput,
    DeleteRepositoryPolicyOutput,
    Blob
  >();

  constructor(readonly input: DeleteRepositoryPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRepositoryPolicyInput,
    DeleteRepositoryPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRepositoryPolicyInput, DeleteRepositoryPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
