import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateApplicationSnapshot } from "../model/CreateApplicationSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateApplicationSnapshotInput } from "../types/CreateApplicationSnapshotInput";
import { CreateApplicationSnapshotOutput } from "../types/CreateApplicationSnapshotOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/CreateApplicationSnapshotInput";
export * from "../types/CreateApplicationSnapshotOutput";
export * from "../types/CreateApplicationSnapshotExceptionsUnion";

export class CreateApplicationSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateApplicationSnapshotInput,
      OutputTypesUnion,
      CreateApplicationSnapshotOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateApplicationSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateApplicationSnapshotInput,
    CreateApplicationSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateApplicationSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateApplicationSnapshotInput,
    CreateApplicationSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateApplicationSnapshotInput, CreateApplicationSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
