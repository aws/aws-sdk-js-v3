import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachRolePolicy } from "../model/operations/DetachRolePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachRolePolicyInput } from "../types/DetachRolePolicyInput";
import { DetachRolePolicyOutput } from "../types/DetachRolePolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DetachRolePolicyInput";
export * from "../types/DetachRolePolicyOutput";
export * from "../types/DetachRolePolicyExceptionsUnion";

export class DetachRolePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachRolePolicyInput,
      OutputTypesUnion,
      DetachRolePolicyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = DetachRolePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachRolePolicyInput,
    DetachRolePolicyOutput,
    Blob
  >();

  constructor(readonly input: DetachRolePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachRolePolicyInput, DetachRolePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachRolePolicyInput, DetachRolePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
