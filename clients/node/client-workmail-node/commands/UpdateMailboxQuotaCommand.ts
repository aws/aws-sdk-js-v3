import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateMailboxQuota } from "../model/UpdateMailboxQuota";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMailboxQuotaInput } from "../types/UpdateMailboxQuotaInput";
import { UpdateMailboxQuotaOutput } from "../types/UpdateMailboxQuotaOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/UpdateMailboxQuotaInput";
export * from "../types/UpdateMailboxQuotaOutput";
export * from "../types/UpdateMailboxQuotaExceptionsUnion";

export class UpdateMailboxQuotaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMailboxQuotaInput,
      OutputTypesUnion,
      UpdateMailboxQuotaOutput,
      WorkMailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateMailboxQuota;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMailboxQuotaInput,
    UpdateMailboxQuotaOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateMailboxQuotaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateMailboxQuotaInput,
    UpdateMailboxQuotaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateMailboxQuotaInput, UpdateMailboxQuotaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
