import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeprovisionByoipCidr } from "../model/DeprovisionByoipCidr";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeprovisionByoipCidrInput } from "../types/DeprovisionByoipCidrInput";
import { DeprovisionByoipCidrOutput } from "../types/DeprovisionByoipCidrOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeprovisionByoipCidrInput";
export * from "../types/DeprovisionByoipCidrOutput";
export * from "../types/DeprovisionByoipCidrExceptionsUnion";

export class DeprovisionByoipCidrCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeprovisionByoipCidrInput,
      OutputTypesUnion,
      DeprovisionByoipCidrOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeprovisionByoipCidr;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeprovisionByoipCidrInput,
    DeprovisionByoipCidrOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeprovisionByoipCidrInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeprovisionByoipCidrInput,
    DeprovisionByoipCidrOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeprovisionByoipCidrInput, DeprovisionByoipCidrOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
