import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetachGroupPolicy } from "../model/operations/DetachGroupPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachGroupPolicyInput } from "../types/DetachGroupPolicyInput";
import { DetachGroupPolicyOutput } from "../types/DetachGroupPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DetachGroupPolicyInput";
export * from "../types/DetachGroupPolicyOutput";
export * from "../types/DetachGroupPolicyExceptionsUnion";

export class DetachGroupPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachGroupPolicyInput,
      OutputTypesUnion,
      DetachGroupPolicyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetachGroupPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachGroupPolicyInput,
    DetachGroupPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetachGroupPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachGroupPolicyInput, DetachGroupPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachGroupPolicyInput, DetachGroupPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
