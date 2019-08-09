import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutPolicy } from "../model/PutPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutPolicyInput } from "../types/PutPolicyInput";
import { PutPolicyOutput } from "../types/PutPolicyOutput";
import { FMSResolvedConfiguration } from "../FMSConfiguration";
export * from "../types/PutPolicyInput";
export * from "../types/PutPolicyOutput";
export * from "../types/PutPolicyExceptionsUnion";

export class PutPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutPolicyInput,
      OutputTypesUnion,
      PutPolicyOutput,
      FMSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPolicyInput,
    PutPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: PutPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: FMSResolvedConfiguration
  ): __aws_sdk_types.Handler<PutPolicyInput, PutPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutPolicyInput, PutPolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
