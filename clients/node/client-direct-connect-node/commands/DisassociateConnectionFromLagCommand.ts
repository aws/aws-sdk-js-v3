import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateConnectionFromLag } from "../model/operations/DisassociateConnectionFromLag";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateConnectionFromLagInput } from "../types/DisassociateConnectionFromLagInput";
import { DisassociateConnectionFromLagOutput } from "../types/DisassociateConnectionFromLagOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DisassociateConnectionFromLagInput";
export * from "../types/DisassociateConnectionFromLagOutput";
export * from "../types/DisassociateConnectionFromLagExceptionsUnion";

export class DisassociateConnectionFromLagCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateConnectionFromLagInput,
      OutputTypesUnion,
      DisassociateConnectionFromLagOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateConnectionFromLag;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateConnectionFromLagInput,
    DisassociateConnectionFromLagOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateConnectionFromLagInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateConnectionFromLagInput,
    DisassociateConnectionFromLagOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateConnectionFromLagInput,
        DisassociateConnectionFromLagOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
