import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetContextKeysForPrincipalPolicy } from "../model/GetContextKeysForPrincipalPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetContextKeysForPrincipalPolicyInput } from "../types/GetContextKeysForPrincipalPolicyInput";
import { GetContextKeysForPrincipalPolicyOutput } from "../types/GetContextKeysForPrincipalPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetContextKeysForPrincipalPolicyInput";
export * from "../types/GetContextKeysForPrincipalPolicyOutput";
export * from "../types/GetContextKeysForPrincipalPolicyExceptionsUnion";

export class GetContextKeysForPrincipalPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetContextKeysForPrincipalPolicyInput,
      OutputTypesUnion,
      GetContextKeysForPrincipalPolicyOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetContextKeysForPrincipalPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetContextKeysForPrincipalPolicyInput,
    GetContextKeysForPrincipalPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: GetContextKeysForPrincipalPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetContextKeysForPrincipalPolicyInput,
    GetContextKeysForPrincipalPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetContextKeysForPrincipalPolicyInput,
        GetContextKeysForPrincipalPolicyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
