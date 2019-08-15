import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDisk } from "../model/operations/GetDisk";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDiskInput } from "../types/GetDiskInput";
import { GetDiskOutput } from "../types/GetDiskOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetDiskInput";
export * from "../types/GetDiskOutput";
export * from "../types/GetDiskExceptionsUnion";

export class GetDiskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDiskInput,
      OutputTypesUnion,
      GetDiskOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDisk;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDiskInput,
    GetDiskOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDiskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDiskInput, GetDiskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDiskInput, GetDiskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
