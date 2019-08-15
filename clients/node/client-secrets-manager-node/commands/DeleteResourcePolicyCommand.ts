import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteResourcePolicy } from "../model/operations/DeleteResourcePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteResourcePolicyInput } from "../types/DeleteResourcePolicyInput";
import { DeleteResourcePolicyOutput } from "../types/DeleteResourcePolicyOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/DeleteResourcePolicyInput";
export * from "../types/DeleteResourcePolicyOutput";
export * from "../types/DeleteResourcePolicyExceptionsUnion";

export class DeleteResourcePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteResourcePolicyInput,
      OutputTypesUnion,
      DeleteResourcePolicyOutput,
      SecretsManagerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteResourcePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteResourcePolicyInput,
    DeleteResourcePolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteResourcePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteResourcePolicyInput,
    DeleteResourcePolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteResourcePolicyInput, DeleteResourcePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
