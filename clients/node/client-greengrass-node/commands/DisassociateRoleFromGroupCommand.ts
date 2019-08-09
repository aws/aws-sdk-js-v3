import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateRoleFromGroup } from "../model/DisassociateRoleFromGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateRoleFromGroupInput } from "../types/DisassociateRoleFromGroupInput";
import { DisassociateRoleFromGroupOutput } from "../types/DisassociateRoleFromGroupOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/DisassociateRoleFromGroupInput";
export * from "../types/DisassociateRoleFromGroupOutput";
export * from "../types/DisassociateRoleFromGroupExceptionsUnion";

export class DisassociateRoleFromGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateRoleFromGroupInput,
      OutputTypesUnion,
      DisassociateRoleFromGroupOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateRoleFromGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateRoleFromGroupInput,
    DisassociateRoleFromGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateRoleFromGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateRoleFromGroupInput,
    DisassociateRoleFromGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateRoleFromGroupInput, DisassociateRoleFromGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
