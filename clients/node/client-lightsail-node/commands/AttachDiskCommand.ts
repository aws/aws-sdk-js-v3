import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AttachDisk } from "../model/AttachDisk";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachDiskInput } from "../types/AttachDiskInput";
import { AttachDiskOutput } from "../types/AttachDiskOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/AttachDiskInput";
export * from "../types/AttachDiskOutput";
export * from "../types/AttachDiskExceptionsUnion";

export class AttachDiskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachDiskInput,
      OutputTypesUnion,
      AttachDiskOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AttachDisk;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachDiskInput,
    AttachDiskOutput,
    _stream.Readable
  >();

  constructor(readonly input: AttachDiskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachDiskInput, AttachDiskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachDiskInput, AttachDiskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
