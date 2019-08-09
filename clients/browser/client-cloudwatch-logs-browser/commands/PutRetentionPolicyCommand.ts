import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutRetentionPolicy } from "../model/PutRetentionPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRetentionPolicyInput } from "../types/PutRetentionPolicyInput";
import { PutRetentionPolicyOutput } from "../types/PutRetentionPolicyOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/PutRetentionPolicyInput";
export * from "../types/PutRetentionPolicyOutput";
export * from "../types/PutRetentionPolicyExceptionsUnion";

export class PutRetentionPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRetentionPolicyInput,
      OutputTypesUnion,
      PutRetentionPolicyOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = PutRetentionPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRetentionPolicyInput,
    PutRetentionPolicyOutput,
    Blob
  >();

  constructor(readonly input: PutRetentionPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutRetentionPolicyInput,
    PutRetentionPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutRetentionPolicyInput, PutRetentionPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
