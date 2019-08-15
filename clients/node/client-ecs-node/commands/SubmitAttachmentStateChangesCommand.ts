import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SubmitAttachmentStateChanges } from "../model/operations/SubmitAttachmentStateChanges";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SubmitAttachmentStateChangesInput } from "../types/SubmitAttachmentStateChangesInput";
import { SubmitAttachmentStateChangesOutput } from "../types/SubmitAttachmentStateChangesOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/SubmitAttachmentStateChangesInput";
export * from "../types/SubmitAttachmentStateChangesOutput";
export * from "../types/SubmitAttachmentStateChangesExceptionsUnion";

export class SubmitAttachmentStateChangesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SubmitAttachmentStateChangesInput,
      OutputTypesUnion,
      SubmitAttachmentStateChangesOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SubmitAttachmentStateChanges;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SubmitAttachmentStateChangesInput,
    SubmitAttachmentStateChangesOutput,
    _stream.Readable
  >();

  constructor(readonly input: SubmitAttachmentStateChangesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SubmitAttachmentStateChangesInput,
    SubmitAttachmentStateChangesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SubmitAttachmentStateChangesInput,
        SubmitAttachmentStateChangesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
