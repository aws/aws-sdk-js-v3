import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateConnector } from "../model/operations/DisassociateConnector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateConnectorInput } from "../types/DisassociateConnectorInput";
import { DisassociateConnectorOutput } from "../types/DisassociateConnectorOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/DisassociateConnectorInput";
export * from "../types/DisassociateConnectorOutput";
export * from "../types/DisassociateConnectorExceptionsUnion";

export class DisassociateConnectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateConnectorInput,
      OutputTypesUnion,
      DisassociateConnectorOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateConnector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateConnectorInput,
    DisassociateConnectorOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateConnectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateConnectorInput,
    DisassociateConnectorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateConnectorInput, DisassociateConnectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
