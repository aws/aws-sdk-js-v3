import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { LookupPolicy } from "../model/LookupPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { LookupPolicyInput } from "../types/LookupPolicyInput";
import { LookupPolicyOutput } from "../types/LookupPolicyOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/LookupPolicyInput";
export * from "../types/LookupPolicyOutput";
export * from "../types/LookupPolicyExceptionsUnion";

export class LookupPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      LookupPolicyInput,
      OutputTypesUnion,
      LookupPolicyOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = LookupPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    LookupPolicyInput,
    LookupPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: LookupPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<LookupPolicyInput, LookupPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<LookupPolicyInput, LookupPolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
