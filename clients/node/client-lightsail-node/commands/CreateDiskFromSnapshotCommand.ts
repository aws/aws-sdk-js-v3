import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDiskFromSnapshot } from "../model/CreateDiskFromSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDiskFromSnapshotInput } from "../types/CreateDiskFromSnapshotInput";
import { CreateDiskFromSnapshotOutput } from "../types/CreateDiskFromSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateDiskFromSnapshotInput";
export * from "../types/CreateDiskFromSnapshotOutput";
export * from "../types/CreateDiskFromSnapshotExceptionsUnion";

export class CreateDiskFromSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDiskFromSnapshotInput,
      OutputTypesUnion,
      CreateDiskFromSnapshotOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDiskFromSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDiskFromSnapshotInput,
    CreateDiskFromSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDiskFromSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDiskFromSnapshotInput,
    CreateDiskFromSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDiskFromSnapshotInput, CreateDiskFromSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
