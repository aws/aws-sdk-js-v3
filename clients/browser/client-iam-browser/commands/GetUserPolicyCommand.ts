import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUserPolicy } from "../model/GetUserPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUserPolicyInput } from "../types/GetUserPolicyInput";
import { GetUserPolicyOutput } from "../types/GetUserPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetUserPolicyInput";
export * from "../types/GetUserPolicyOutput";
export * from "../types/GetUserPolicyExceptionsUnion";

export class GetUserPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUserPolicyInput,
      OutputTypesUnion,
      GetUserPolicyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetUserPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUserPolicyInput,
    GetUserPolicyOutput,
    Blob
  >();

  constructor(readonly input: GetUserPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUserPolicyInput, GetUserPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUserPolicyInput, GetUserPolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
