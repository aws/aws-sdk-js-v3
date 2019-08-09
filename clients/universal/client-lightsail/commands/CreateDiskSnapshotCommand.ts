import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDiskSnapshot } from "../model/CreateDiskSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDiskSnapshotInput } from "../types/CreateDiskSnapshotInput";
import { CreateDiskSnapshotOutput } from "../types/CreateDiskSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateDiskSnapshotInput";
export * from "../types/CreateDiskSnapshotOutput";
export * from "../types/CreateDiskSnapshotExceptionsUnion";

export class CreateDiskSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDiskSnapshotInput,
      OutputTypesUnion,
      CreateDiskSnapshotOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateDiskSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDiskSnapshotInput,
    CreateDiskSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateDiskSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDiskSnapshotInput,
    CreateDiskSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDiskSnapshotInput, CreateDiskSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
