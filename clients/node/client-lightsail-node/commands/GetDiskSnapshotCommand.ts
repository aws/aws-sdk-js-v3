import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDiskSnapshot } from "../model/operations/GetDiskSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDiskSnapshotInput } from "../types/GetDiskSnapshotInput";
import { GetDiskSnapshotOutput } from "../types/GetDiskSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetDiskSnapshotInput";
export * from "../types/GetDiskSnapshotOutput";
export * from "../types/GetDiskSnapshotExceptionsUnion";

export class GetDiskSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDiskSnapshotInput,
      OutputTypesUnion,
      GetDiskSnapshotOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDiskSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDiskSnapshotInput,
    GetDiskSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDiskSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDiskSnapshotInput, GetDiskSnapshotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDiskSnapshotInput, GetDiskSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
