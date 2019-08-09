import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutResourcePolicy } from "../model/PutResourcePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutResourcePolicyInput } from "../types/PutResourcePolicyInput";
import { PutResourcePolicyOutput } from "../types/PutResourcePolicyOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/PutResourcePolicyInput";
export * from "../types/PutResourcePolicyOutput";
export * from "../types/PutResourcePolicyExceptionsUnion";

export class PutResourcePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutResourcePolicyInput,
      OutputTypesUnion,
      PutResourcePolicyOutput,
      SecretsManagerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutResourcePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutResourcePolicyInput,
    PutResourcePolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: PutResourcePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<PutResourcePolicyInput, PutResourcePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutResourcePolicyInput, PutResourcePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
