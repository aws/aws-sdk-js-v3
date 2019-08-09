import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListApplicationSnapshots } from "../model/ListApplicationSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListApplicationSnapshotsInput } from "../types/ListApplicationSnapshotsInput";
import { ListApplicationSnapshotsOutput } from "../types/ListApplicationSnapshotsOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/ListApplicationSnapshotsInput";
export * from "../types/ListApplicationSnapshotsOutput";
export * from "../types/ListApplicationSnapshotsExceptionsUnion";

export class ListApplicationSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListApplicationSnapshotsInput,
      OutputTypesUnion,
      ListApplicationSnapshotsOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListApplicationSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListApplicationSnapshotsInput,
    ListApplicationSnapshotsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListApplicationSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListApplicationSnapshotsInput,
    ListApplicationSnapshotsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListApplicationSnapshotsInput, ListApplicationSnapshotsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
