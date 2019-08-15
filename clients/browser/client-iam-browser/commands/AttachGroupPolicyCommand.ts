import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachGroupPolicy } from "../model/operations/AttachGroupPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachGroupPolicyInput } from "../types/AttachGroupPolicyInput";
import { AttachGroupPolicyOutput } from "../types/AttachGroupPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/AttachGroupPolicyInput";
export * from "../types/AttachGroupPolicyOutput";
export * from "../types/AttachGroupPolicyExceptionsUnion";

export class AttachGroupPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachGroupPolicyInput,
      OutputTypesUnion,
      AttachGroupPolicyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = AttachGroupPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachGroupPolicyInput,
    AttachGroupPolicyOutput,
    Blob
  >();

  constructor(readonly input: AttachGroupPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachGroupPolicyInput, AttachGroupPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachGroupPolicyInput, AttachGroupPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
