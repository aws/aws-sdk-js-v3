import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateDRTRole } from "../model/operations/DisassociateDRTRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateDRTRoleInput } from "../types/DisassociateDRTRoleInput";
import { DisassociateDRTRoleOutput } from "../types/DisassociateDRTRoleOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/DisassociateDRTRoleInput";
export * from "../types/DisassociateDRTRoleOutput";
export * from "../types/DisassociateDRTRoleExceptionsUnion";

export class DisassociateDRTRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateDRTRoleInput,
      OutputTypesUnion,
      DisassociateDRTRoleOutput,
      ShieldResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateDRTRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateDRTRoleInput,
    DisassociateDRTRoleOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateDRTRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateDRTRoleInput,
    DisassociateDRTRoleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateDRTRoleInput, DisassociateDRTRoleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
