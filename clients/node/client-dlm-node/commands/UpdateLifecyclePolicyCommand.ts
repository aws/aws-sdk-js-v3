import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateLifecyclePolicy } from "../model/operations/UpdateLifecyclePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateLifecyclePolicyInput } from "../types/UpdateLifecyclePolicyInput";
import { UpdateLifecyclePolicyOutput } from "../types/UpdateLifecyclePolicyOutput";
import { DLMResolvedConfiguration } from "../DLMConfiguration";
export * from "../types/UpdateLifecyclePolicyInput";
export * from "../types/UpdateLifecyclePolicyOutput";
export * from "../types/UpdateLifecyclePolicyExceptionsUnion";

export class UpdateLifecyclePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateLifecyclePolicyInput,
      OutputTypesUnion,
      UpdateLifecyclePolicyOutput,
      DLMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateLifecyclePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateLifecyclePolicyInput,
    UpdateLifecyclePolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateLifecyclePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DLMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateLifecyclePolicyInput,
    UpdateLifecyclePolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateLifecyclePolicyInput, UpdateLifecyclePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
