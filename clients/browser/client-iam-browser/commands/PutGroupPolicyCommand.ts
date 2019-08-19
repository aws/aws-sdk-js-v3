import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutGroupPolicy } from "../model/operations/PutGroupPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutGroupPolicyInput } from "../types/PutGroupPolicyInput";
import { PutGroupPolicyOutput } from "../types/PutGroupPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/PutGroupPolicyInput";
export * from "../types/PutGroupPolicyOutput";
export * from "../types/PutGroupPolicyExceptionsUnion";

export class PutGroupPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutGroupPolicyInput,
      OutputTypesUnion,
      PutGroupPolicyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = PutGroupPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutGroupPolicyInput,
    PutGroupPolicyOutput,
    Blob
  >();

  constructor(readonly input: PutGroupPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<PutGroupPolicyInput, PutGroupPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutGroupPolicyInput, PutGroupPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
