import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { WithdrawByoipCidr } from "../model/WithdrawByoipCidr";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { WithdrawByoipCidrInput } from "../types/WithdrawByoipCidrInput";
import { WithdrawByoipCidrOutput } from "../types/WithdrawByoipCidrOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/WithdrawByoipCidrInput";
export * from "../types/WithdrawByoipCidrOutput";
export * from "../types/WithdrawByoipCidrExceptionsUnion";

export class WithdrawByoipCidrCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      WithdrawByoipCidrInput,
      OutputTypesUnion,
      WithdrawByoipCidrOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = WithdrawByoipCidr;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    WithdrawByoipCidrInput,
    WithdrawByoipCidrOutput,
    _stream.Readable
  >();

  constructor(readonly input: WithdrawByoipCidrInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<WithdrawByoipCidrInput, WithdrawByoipCidrOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<WithdrawByoipCidrInput, WithdrawByoipCidrOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
