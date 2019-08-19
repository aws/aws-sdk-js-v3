import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetInstanceSnapshot } from "../model/operations/GetInstanceSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInstanceSnapshotInput } from "../types/GetInstanceSnapshotInput";
import { GetInstanceSnapshotOutput } from "../types/GetInstanceSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetInstanceSnapshotInput";
export * from "../types/GetInstanceSnapshotOutput";
export * from "../types/GetInstanceSnapshotExceptionsUnion";

export class GetInstanceSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInstanceSnapshotInput,
      OutputTypesUnion,
      GetInstanceSnapshotOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetInstanceSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstanceSnapshotInput,
    GetInstanceSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetInstanceSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetInstanceSnapshotInput,
    GetInstanceSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInstanceSnapshotInput, GetInstanceSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
