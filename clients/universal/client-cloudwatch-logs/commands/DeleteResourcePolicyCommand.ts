import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteResourcePolicy } from "../model/DeleteResourcePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteResourcePolicyInput } from "../types/DeleteResourcePolicyInput";
import { DeleteResourcePolicyOutput } from "../types/DeleteResourcePolicyOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
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
      CloudWatchLogsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteResourcePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteResourcePolicyInput,
    DeleteResourcePolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteResourcePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchLogsResolvedConfiguration
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
