import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SimulatePrincipalPolicy } from "../model/SimulatePrincipalPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SimulatePrincipalPolicyInput } from "../types/SimulatePrincipalPolicyInput";
import { SimulatePrincipalPolicyOutput } from "../types/SimulatePrincipalPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/SimulatePrincipalPolicyInput";
export * from "../types/SimulatePrincipalPolicyOutput";
export * from "../types/SimulatePrincipalPolicyExceptionsUnion";

export class SimulatePrincipalPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SimulatePrincipalPolicyInput,
      OutputTypesUnion,
      SimulatePrincipalPolicyOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SimulatePrincipalPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SimulatePrincipalPolicyInput,
    SimulatePrincipalPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: SimulatePrincipalPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SimulatePrincipalPolicyInput,
    SimulatePrincipalPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SimulatePrincipalPolicyInput, SimulatePrincipalPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
