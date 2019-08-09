import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetStackPolicy } from "../model/SetStackPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetStackPolicyInput } from "../types/SetStackPolicyInput";
import { SetStackPolicyOutput } from "../types/SetStackPolicyOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/SetStackPolicyInput";
export * from "../types/SetStackPolicyOutput";
export * from "../types/SetStackPolicyExceptionsUnion";

export class SetStackPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetStackPolicyInput,
      OutputTypesUnion,
      SetStackPolicyOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetStackPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetStackPolicyInput,
    SetStackPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetStackPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<SetStackPolicyInput, SetStackPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetStackPolicyInput, SetStackPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
