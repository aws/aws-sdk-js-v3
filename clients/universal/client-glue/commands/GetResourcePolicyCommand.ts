import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResourcePolicy } from "../model/GetResourcePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourcePolicyInput } from "../types/GetResourcePolicyInput";
import { GetResourcePolicyOutput } from "../types/GetResourcePolicyOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
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
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetResourcePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourcePolicyInput,
    GetResourcePolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: GetResourcePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
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
