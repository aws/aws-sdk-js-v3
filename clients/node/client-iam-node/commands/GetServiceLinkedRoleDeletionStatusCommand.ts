import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetServiceLinkedRoleDeletionStatus } from "../model/operations/GetServiceLinkedRoleDeletionStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServiceLinkedRoleDeletionStatusInput } from "../types/GetServiceLinkedRoleDeletionStatusInput";
import { GetServiceLinkedRoleDeletionStatusOutput } from "../types/GetServiceLinkedRoleDeletionStatusOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetServiceLinkedRoleDeletionStatusInput";
export * from "../types/GetServiceLinkedRoleDeletionStatusOutput";
export * from "../types/GetServiceLinkedRoleDeletionStatusExceptionsUnion";

export class GetServiceLinkedRoleDeletionStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServiceLinkedRoleDeletionStatusInput,
      OutputTypesUnion,
      GetServiceLinkedRoleDeletionStatusOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetServiceLinkedRoleDeletionStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServiceLinkedRoleDeletionStatusInput,
    GetServiceLinkedRoleDeletionStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetServiceLinkedRoleDeletionStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetServiceLinkedRoleDeletionStatusInput,
    GetServiceLinkedRoleDeletionStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetServiceLinkedRoleDeletionStatusInput,
        GetServiceLinkedRoleDeletionStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
