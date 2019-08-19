import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSegment } from "../model/operations/UpdateSegment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSegmentInput } from "../types/UpdateSegmentInput";
import { UpdateSegmentOutput } from "../types/UpdateSegmentOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateSegmentInput";
export * from "../types/UpdateSegmentOutput";
export * from "../types/UpdateSegmentExceptionsUnion";

export class UpdateSegmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSegmentInput,
      OutputTypesUnion,
      UpdateSegmentOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSegment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSegmentInput,
    UpdateSegmentOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSegmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateSegmentInput, UpdateSegmentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSegmentInput, UpdateSegmentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
