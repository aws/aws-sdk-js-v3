import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLifecyclePolicies } from "../model/GetLifecyclePolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLifecyclePoliciesInput } from "../types/GetLifecyclePoliciesInput";
import { GetLifecyclePoliciesOutput } from "../types/GetLifecyclePoliciesOutput";
import { DLMResolvedConfiguration } from "../DLMConfiguration";
export * from "../types/GetLifecyclePoliciesInput";
export * from "../types/GetLifecyclePoliciesOutput";
export * from "../types/GetLifecyclePoliciesExceptionsUnion";

export class GetLifecyclePoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLifecyclePoliciesInput,
      OutputTypesUnion,
      GetLifecyclePoliciesOutput,
      DLMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetLifecyclePolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLifecyclePoliciesInput,
    GetLifecyclePoliciesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetLifecyclePoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DLMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLifecyclePoliciesInput,
    GetLifecyclePoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLifecyclePoliciesInput, GetLifecyclePoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
