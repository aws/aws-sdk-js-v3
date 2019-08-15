import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRetentionPolicy } from "../model/operations/DeleteRetentionPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRetentionPolicyInput } from "../types/DeleteRetentionPolicyInput";
import { DeleteRetentionPolicyOutput } from "../types/DeleteRetentionPolicyOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DeleteRetentionPolicyInput";
export * from "../types/DeleteRetentionPolicyOutput";
export * from "../types/DeleteRetentionPolicyExceptionsUnion";

export class DeleteRetentionPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRetentionPolicyInput,
      OutputTypesUnion,
      DeleteRetentionPolicyOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRetentionPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRetentionPolicyInput,
    DeleteRetentionPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRetentionPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRetentionPolicyInput,
    DeleteRetentionPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRetentionPolicyInput, DeleteRetentionPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
