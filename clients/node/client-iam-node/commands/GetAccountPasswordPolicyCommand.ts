import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAccountPasswordPolicy } from "../model/operations/GetAccountPasswordPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAccountPasswordPolicyInput } from "../types/GetAccountPasswordPolicyInput";
import { GetAccountPasswordPolicyOutput } from "../types/GetAccountPasswordPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetAccountPasswordPolicyInput";
export * from "../types/GetAccountPasswordPolicyOutput";
export * from "../types/GetAccountPasswordPolicyExceptionsUnion";

export class GetAccountPasswordPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAccountPasswordPolicyInput,
      OutputTypesUnion,
      GetAccountPasswordPolicyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAccountPasswordPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAccountPasswordPolicyInput,
    GetAccountPasswordPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAccountPasswordPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAccountPasswordPolicyInput,
    GetAccountPasswordPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAccountPasswordPolicyInput, GetAccountPasswordPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
