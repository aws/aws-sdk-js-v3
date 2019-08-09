import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSegment } from "../model/DeleteSegment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSegmentInput } from "../types/DeleteSegmentInput";
import { DeleteSegmentOutput } from "../types/DeleteSegmentOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteSegmentInput";
export * from "../types/DeleteSegmentOutput";
export * from "../types/DeleteSegmentExceptionsUnion";

export class DeleteSegmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSegmentInput,
      OutputTypesUnion,
      DeleteSegmentOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteSegment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSegmentInput,
    DeleteSegmentOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSegmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSegmentInput, DeleteSegmentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSegmentInput, DeleteSegmentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
