import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSegment } from "../model/operations/CreateSegment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSegmentInput } from "../types/CreateSegmentInput";
import { CreateSegmentOutput } from "../types/CreateSegmentOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/CreateSegmentInput";
export * from "../types/CreateSegmentOutput";
export * from "../types/CreateSegmentExceptionsUnion";

export class CreateSegmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSegmentInput,
      OutputTypesUnion,
      CreateSegmentOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSegment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSegmentInput,
    CreateSegmentOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSegmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateSegmentInput, CreateSegmentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSegmentInput, CreateSegmentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
