import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateConnectionFromLag } from "../model/DisassociateConnectionFromLag";
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
      Blob
    > {
  readonly model = DisassociateConnectionFromLag;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateConnectionFromLagInput,
    DisassociateConnectionFromLagOutput,
    Blob
  >();

  constructor(readonly input: DisassociateConnectionFromLagInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
