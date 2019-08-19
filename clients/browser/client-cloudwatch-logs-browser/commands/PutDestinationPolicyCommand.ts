import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutDestinationPolicy } from "../model/operations/PutDestinationPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutDestinationPolicyInput } from "../types/PutDestinationPolicyInput";
import { PutDestinationPolicyOutput } from "../types/PutDestinationPolicyOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/PutDestinationPolicyInput";
export * from "../types/PutDestinationPolicyOutput";
export * from "../types/PutDestinationPolicyExceptionsUnion";

export class PutDestinationPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutDestinationPolicyInput,
      OutputTypesUnion,
      PutDestinationPolicyOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = PutDestinationPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutDestinationPolicyInput,
    PutDestinationPolicyOutput,
    Blob
  >();

  constructor(readonly input: PutDestinationPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutDestinationPolicyInput,
    PutDestinationPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutDestinationPolicyInput, PutDestinationPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
