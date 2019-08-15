import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateRouteTable } from "../model/operations/DisassociateRouteTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateRouteTableInput } from "../types/DisassociateRouteTableInput";
import { DisassociateRouteTableOutput } from "../types/DisassociateRouteTableOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DisassociateRouteTableInput";
export * from "../types/DisassociateRouteTableOutput";
export * from "../types/DisassociateRouteTableExceptionsUnion";

export class DisassociateRouteTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateRouteTableInput,
      OutputTypesUnion,
      DisassociateRouteTableOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateRouteTable;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateRouteTableInput,
    DisassociateRouteTableOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateRouteTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateRouteTableInput,
    DisassociateRouteTableOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateRouteTableInput, DisassociateRouteTableOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
