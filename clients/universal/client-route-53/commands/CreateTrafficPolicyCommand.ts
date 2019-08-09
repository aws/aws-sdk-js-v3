import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTrafficPolicy } from "../model/CreateTrafficPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTrafficPolicyInput } from "../types/CreateTrafficPolicyInput";
import { CreateTrafficPolicyOutput } from "../types/CreateTrafficPolicyOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/CreateTrafficPolicyInput";
export * from "../types/CreateTrafficPolicyOutput";
export * from "../types/CreateTrafficPolicyExceptionsUnion";

export class CreateTrafficPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTrafficPolicyInput,
      OutputTypesUnion,
      CreateTrafficPolicyOutput,
      Route53ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateTrafficPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTrafficPolicyInput,
    CreateTrafficPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateTrafficPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTrafficPolicyInput,
    CreateTrafficPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTrafficPolicyInput, CreateTrafficPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
