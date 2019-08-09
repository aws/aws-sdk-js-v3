import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeliverConfigSnapshot } from "../model/DeliverConfigSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeliverConfigSnapshotInput } from "../types/DeliverConfigSnapshotInput";
import { DeliverConfigSnapshotOutput } from "../types/DeliverConfigSnapshotOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DeliverConfigSnapshotInput";
export * from "../types/DeliverConfigSnapshotOutput";
export * from "../types/DeliverConfigSnapshotExceptionsUnion";

export class DeliverConfigSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeliverConfigSnapshotInput,
      OutputTypesUnion,
      DeliverConfigSnapshotOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeliverConfigSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeliverConfigSnapshotInput,
    DeliverConfigSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeliverConfigSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeliverConfigSnapshotInput,
    DeliverConfigSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeliverConfigSnapshotInput, DeliverConfigSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
