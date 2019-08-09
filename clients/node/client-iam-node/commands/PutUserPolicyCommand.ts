import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutUserPolicy } from "../model/PutUserPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutUserPolicyInput } from "../types/PutUserPolicyInput";
import { PutUserPolicyOutput } from "../types/PutUserPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/PutUserPolicyInput";
export * from "../types/PutUserPolicyOutput";
export * from "../types/PutUserPolicyExceptionsUnion";

export class PutUserPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutUserPolicyInput,
      OutputTypesUnion,
      PutUserPolicyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutUserPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutUserPolicyInput,
    PutUserPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutUserPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<PutUserPolicyInput, PutUserPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutUserPolicyInput, PutUserPolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
