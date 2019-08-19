import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPolicy } from "../model/operations/GetPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPolicyInput } from "../types/GetPolicyInput";
import { GetPolicyOutput } from "../types/GetPolicyOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/GetPolicyInput";
export * from "../types/GetPolicyOutput";
export * from "../types/GetPolicyExceptionsUnion";

export class GetPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPolicyInput,
      OutputTypesUnion,
      GetPolicyOutput,
      LambdaResolvedConfiguration,
      Blob
    > {
  readonly model = GetPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPolicyInput,
    GetPolicyOutput,
    Blob
  >();

  constructor(readonly input: GetPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPolicyInput, GetPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPolicyInput, GetPolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
