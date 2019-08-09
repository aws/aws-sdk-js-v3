import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetStackPolicy } from "../model/GetStackPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetStackPolicyInput } from "../types/GetStackPolicyInput";
import { GetStackPolicyOutput } from "../types/GetStackPolicyOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/GetStackPolicyInput";
export * from "../types/GetStackPolicyOutput";
export * from "../types/GetStackPolicyExceptionsUnion";

export class GetStackPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetStackPolicyInput,
      OutputTypesUnion,
      GetStackPolicyOutput,
      CloudFormationResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetStackPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetStackPolicyInput,
    GetStackPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: GetStackPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<GetStackPolicyInput, GetStackPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetStackPolicyInput, GetStackPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
