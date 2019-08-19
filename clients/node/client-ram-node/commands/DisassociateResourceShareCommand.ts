import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateResourceShare } from "../model/operations/DisassociateResourceShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateResourceShareInput } from "../types/DisassociateResourceShareInput";
import { DisassociateResourceShareOutput } from "../types/DisassociateResourceShareOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/DisassociateResourceShareInput";
export * from "../types/DisassociateResourceShareOutput";
export * from "../types/DisassociateResourceShareExceptionsUnion";

export class DisassociateResourceShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateResourceShareInput,
      OutputTypesUnion,
      DisassociateResourceShareOutput,
      RAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateResourceShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateResourceShareInput,
    DisassociateResourceShareOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateResourceShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateResourceShareInput,
    DisassociateResourceShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateResourceShareInput, DisassociateResourceShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
