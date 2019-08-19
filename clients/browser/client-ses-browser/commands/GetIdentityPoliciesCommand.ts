import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIdentityPolicies } from "../model/operations/GetIdentityPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIdentityPoliciesInput } from "../types/GetIdentityPoliciesInput";
import { GetIdentityPoliciesOutput } from "../types/GetIdentityPoliciesOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/GetIdentityPoliciesInput";
export * from "../types/GetIdentityPoliciesOutput";
export * from "../types/GetIdentityPoliciesExceptionsUnion";

export class GetIdentityPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIdentityPoliciesInput,
      OutputTypesUnion,
      GetIdentityPoliciesOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = GetIdentityPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdentityPoliciesInput,
    GetIdentityPoliciesOutput,
    Blob
  >();

  constructor(readonly input: GetIdentityPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIdentityPoliciesInput,
    GetIdentityPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIdentityPoliciesInput, GetIdentityPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
