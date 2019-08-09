import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ProvisionByoipCidr } from "../model/ProvisionByoipCidr";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ProvisionByoipCidrInput } from "../types/ProvisionByoipCidrInput";
import { ProvisionByoipCidrOutput } from "../types/ProvisionByoipCidrOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ProvisionByoipCidrInput";
export * from "../types/ProvisionByoipCidrOutput";
export * from "../types/ProvisionByoipCidrExceptionsUnion";

export class ProvisionByoipCidrCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ProvisionByoipCidrInput,
      OutputTypesUnion,
      ProvisionByoipCidrOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ProvisionByoipCidr;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ProvisionByoipCidrInput,
    ProvisionByoipCidrOutput,
    _stream.Readable
  >();

  constructor(readonly input: ProvisionByoipCidrInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ProvisionByoipCidrInput,
    ProvisionByoipCidrOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ProvisionByoipCidrInput, ProvisionByoipCidrOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
