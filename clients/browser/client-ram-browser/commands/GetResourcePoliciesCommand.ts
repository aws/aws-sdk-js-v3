import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResourcePolicies } from "../model/GetResourcePolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourcePoliciesInput } from "../types/GetResourcePoliciesInput";
import { GetResourcePoliciesOutput } from "../types/GetResourcePoliciesOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/GetResourcePoliciesInput";
export * from "../types/GetResourcePoliciesOutput";
export * from "../types/GetResourcePoliciesExceptionsUnion";

export class GetResourcePoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourcePoliciesInput,
      OutputTypesUnion,
      GetResourcePoliciesOutput,
      RAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetResourcePolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourcePoliciesInput,
    GetResourcePoliciesOutput,
    Blob
  >();

  constructor(readonly input: GetResourcePoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetResourcePoliciesInput,
    GetResourcePoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResourcePoliciesInput, GetResourcePoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
