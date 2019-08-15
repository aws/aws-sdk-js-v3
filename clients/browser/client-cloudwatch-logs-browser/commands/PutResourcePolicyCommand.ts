import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutResourcePolicy } from "../model/operations/PutResourcePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutResourcePolicyInput } from "../types/PutResourcePolicyInput";
import { PutResourcePolicyOutput } from "../types/PutResourcePolicyOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/PutResourcePolicyInput";
export * from "../types/PutResourcePolicyOutput";
export * from "../types/PutResourcePolicyExceptionsUnion";

export class PutResourcePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutResourcePolicyInput,
      OutputTypesUnion,
      PutResourcePolicyOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = PutResourcePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutResourcePolicyInput,
    PutResourcePolicyOutput,
    Blob
  >();

  constructor(readonly input: PutResourcePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<PutResourcePolicyInput, PutResourcePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutResourcePolicyInput, PutResourcePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
