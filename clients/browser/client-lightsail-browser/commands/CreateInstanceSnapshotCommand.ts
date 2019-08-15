import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateInstanceSnapshot } from "../model/operations/CreateInstanceSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInstanceSnapshotInput } from "../types/CreateInstanceSnapshotInput";
import { CreateInstanceSnapshotOutput } from "../types/CreateInstanceSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateInstanceSnapshotInput";
export * from "../types/CreateInstanceSnapshotOutput";
export * from "../types/CreateInstanceSnapshotExceptionsUnion";

export class CreateInstanceSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInstanceSnapshotInput,
      OutputTypesUnion,
      CreateInstanceSnapshotOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = CreateInstanceSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInstanceSnapshotInput,
    CreateInstanceSnapshotOutput,
    Blob
  >();

  constructor(readonly input: CreateInstanceSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateInstanceSnapshotInput,
    CreateInstanceSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateInstanceSnapshotInput, CreateInstanceSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
