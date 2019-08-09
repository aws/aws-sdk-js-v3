import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = DeliverConfigSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeliverConfigSnapshotInput,
    DeliverConfigSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: DeliverConfigSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
