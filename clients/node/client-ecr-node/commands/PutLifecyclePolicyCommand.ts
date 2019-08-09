import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutLifecyclePolicy } from "../model/PutLifecyclePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutLifecyclePolicyInput } from "../types/PutLifecyclePolicyInput";
import { PutLifecyclePolicyOutput } from "../types/PutLifecyclePolicyOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/PutLifecyclePolicyInput";
export * from "../types/PutLifecyclePolicyOutput";
export * from "../types/PutLifecyclePolicyExceptionsUnion";

export class PutLifecyclePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutLifecyclePolicyInput,
      OutputTypesUnion,
      PutLifecyclePolicyOutput,
      ECRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutLifecyclePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutLifecyclePolicyInput,
    PutLifecyclePolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutLifecyclePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutLifecyclePolicyInput,
    PutLifecyclePolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutLifecyclePolicyInput, PutLifecyclePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
