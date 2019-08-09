import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLifecyclePolicy } from "../model/GetLifecyclePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLifecyclePolicyInput } from "../types/GetLifecyclePolicyInput";
import { GetLifecyclePolicyOutput } from "../types/GetLifecyclePolicyOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/GetLifecyclePolicyInput";
export * from "../types/GetLifecyclePolicyOutput";
export * from "../types/GetLifecyclePolicyExceptionsUnion";

export class GetLifecyclePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLifecyclePolicyInput,
      OutputTypesUnion,
      GetLifecyclePolicyOutput,
      ECRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetLifecyclePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLifecyclePolicyInput,
    GetLifecyclePolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLifecyclePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLifecyclePolicyInput,
    GetLifecyclePolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLifecyclePolicyInput, GetLifecyclePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
