import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateAdminAccount } from "../model/DisassociateAdminAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateAdminAccountInput } from "../types/DisassociateAdminAccountInput";
import { DisassociateAdminAccountOutput } from "../types/DisassociateAdminAccountOutput";
import { FMSResolvedConfiguration } from "../FMSConfiguration";
export * from "../types/DisassociateAdminAccountInput";
export * from "../types/DisassociateAdminAccountOutput";
export * from "../types/DisassociateAdminAccountExceptionsUnion";

export class DisassociateAdminAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateAdminAccountInput,
      OutputTypesUnion,
      DisassociateAdminAccountOutput,
      FMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateAdminAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateAdminAccountInput,
    DisassociateAdminAccountOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateAdminAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateAdminAccountInput,
    DisassociateAdminAccountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateAdminAccountInput, DisassociateAdminAccountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
