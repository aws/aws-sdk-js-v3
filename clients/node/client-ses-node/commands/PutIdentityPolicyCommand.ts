import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutIdentityPolicy } from "../model/PutIdentityPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutIdentityPolicyInput } from "../types/PutIdentityPolicyInput";
import { PutIdentityPolicyOutput } from "../types/PutIdentityPolicyOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/PutIdentityPolicyInput";
export * from "../types/PutIdentityPolicyOutput";
export * from "../types/PutIdentityPolicyExceptionsUnion";

export class PutIdentityPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutIdentityPolicyInput,
      OutputTypesUnion,
      PutIdentityPolicyOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutIdentityPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutIdentityPolicyInput,
    PutIdentityPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutIdentityPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<PutIdentityPolicyInput, PutIdentityPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutIdentityPolicyInput, PutIdentityPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
