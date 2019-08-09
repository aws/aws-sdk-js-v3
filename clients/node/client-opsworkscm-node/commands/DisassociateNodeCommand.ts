import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateNode } from "../model/DisassociateNode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateNodeInput } from "../types/DisassociateNodeInput";
import { DisassociateNodeOutput } from "../types/DisassociateNodeOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/DisassociateNodeInput";
export * from "../types/DisassociateNodeOutput";
export * from "../types/DisassociateNodeExceptionsUnion";

export class DisassociateNodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateNodeInput,
      OutputTypesUnion,
      DisassociateNodeOutput,
      OpsWorksCMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateNode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateNodeInput,
    DisassociateNodeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateNodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<DisassociateNodeInput, DisassociateNodeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateNodeInput, DisassociateNodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
