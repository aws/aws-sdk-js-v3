import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateAddress } from "../model/DisassociateAddress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateAddressInput } from "../types/DisassociateAddressInput";
import { DisassociateAddressOutput } from "../types/DisassociateAddressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisassociateAddressInput";
export * from "../types/DisassociateAddressOutput";
export * from "../types/DisassociateAddressExceptionsUnion";

export class DisassociateAddressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateAddressInput,
      OutputTypesUnion,
      DisassociateAddressOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateAddressInput,
    DisassociateAddressOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateAddressInput,
    DisassociateAddressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateAddressInput, DisassociateAddressOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
