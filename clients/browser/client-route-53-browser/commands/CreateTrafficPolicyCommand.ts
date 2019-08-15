import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTrafficPolicy } from "../model/operations/CreateTrafficPolicy";
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
      Blob
    > {
  readonly model = CreateTrafficPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTrafficPolicyInput,
    CreateTrafficPolicyOutput,
    Blob
  >();

  constructor(readonly input: CreateTrafficPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
