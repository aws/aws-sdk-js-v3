import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResourcePolicy } from "../model/operations/GetResourcePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourcePolicyInput } from "../types/GetResourcePolicyInput";
import { GetResourcePolicyOutput } from "../types/GetResourcePolicyOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/GetResourcePolicyInput";
export * from "../types/GetResourcePolicyOutput";
export * from "../types/GetResourcePolicyExceptionsUnion";

export class GetResourcePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourcePolicyInput,
      OutputTypesUnion,
      GetResourcePolicyOutput,
      SecretsManagerResolvedConfiguration,
      Blob
    > {
  readonly model = GetResourcePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourcePolicyInput,
    GetResourcePolicyOutput,
    Blob
  >();

  constructor(readonly input: GetResourcePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<GetResourcePolicyInput, GetResourcePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResourcePolicyInput, GetResourcePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
