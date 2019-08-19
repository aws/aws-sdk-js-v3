import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDiskSnapshots } from "../model/operations/GetDiskSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDiskSnapshotsInput } from "../types/GetDiskSnapshotsInput";
import { GetDiskSnapshotsOutput } from "../types/GetDiskSnapshotsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetDiskSnapshotsInput";
export * from "../types/GetDiskSnapshotsOutput";
export * from "../types/GetDiskSnapshotsExceptionsUnion";

export class GetDiskSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDiskSnapshotsInput,
      OutputTypesUnion,
      GetDiskSnapshotsOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDiskSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDiskSnapshotsInput,
    GetDiskSnapshotsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDiskSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDiskSnapshotsInput, GetDiskSnapshotsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDiskSnapshotsInput, GetDiskSnapshotsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
