import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAccountPasswordPolicy } from "../model/UpdateAccountPasswordPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAccountPasswordPolicyInput } from "../types/UpdateAccountPasswordPolicyInput";
import { UpdateAccountPasswordPolicyOutput } from "../types/UpdateAccountPasswordPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateAccountPasswordPolicyInput";
export * from "../types/UpdateAccountPasswordPolicyOutput";
export * from "../types/UpdateAccountPasswordPolicyExceptionsUnion";

export class UpdateAccountPasswordPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAccountPasswordPolicyInput,
      OutputTypesUnion,
      UpdateAccountPasswordPolicyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAccountPasswordPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAccountPasswordPolicyInput,
    UpdateAccountPasswordPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAccountPasswordPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAccountPasswordPolicyInput,
    UpdateAccountPasswordPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateAccountPasswordPolicyInput,
        UpdateAccountPasswordPolicyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
