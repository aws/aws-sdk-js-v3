import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSegmentVersion } from "../model/GetSegmentVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSegmentVersionInput } from "../types/GetSegmentVersionInput";
import { GetSegmentVersionOutput } from "../types/GetSegmentVersionOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetSegmentVersionInput";
export * from "../types/GetSegmentVersionOutput";
export * from "../types/GetSegmentVersionExceptionsUnion";

export class GetSegmentVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSegmentVersionInput,
      OutputTypesUnion,
      GetSegmentVersionOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSegmentVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSegmentVersionInput,
    GetSegmentVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSegmentVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSegmentVersionInput, GetSegmentVersionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSegmentVersionInput, GetSegmentVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
