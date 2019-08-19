import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachUserPolicy } from "../model/operations/DetachUserPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachUserPolicyInput } from "../types/DetachUserPolicyInput";
import { DetachUserPolicyOutput } from "../types/DetachUserPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DetachUserPolicyInput";
export * from "../types/DetachUserPolicyOutput";
export * from "../types/DetachUserPolicyExceptionsUnion";

export class DetachUserPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachUserPolicyInput,
      OutputTypesUnion,
      DetachUserPolicyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = DetachUserPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachUserPolicyInput,
    DetachUserPolicyOutput,
    Blob
  >();

  constructor(readonly input: DetachUserPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachUserPolicyInput, DetachUserPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachUserPolicyInput, DetachUserPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
