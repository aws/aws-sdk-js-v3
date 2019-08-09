import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutApplicationPolicy } from "../model/PutApplicationPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutApplicationPolicyInput } from "../types/PutApplicationPolicyInput";
import { PutApplicationPolicyOutput } from "../types/PutApplicationPolicyOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/PutApplicationPolicyInput";
export * from "../types/PutApplicationPolicyOutput";
export * from "../types/PutApplicationPolicyExceptionsUnion";

export class PutApplicationPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutApplicationPolicyInput,
      OutputTypesUnion,
      PutApplicationPolicyOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutApplicationPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutApplicationPolicyInput,
    PutApplicationPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: PutApplicationPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutApplicationPolicyInput,
    PutApplicationPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutApplicationPolicyInput, PutApplicationPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
