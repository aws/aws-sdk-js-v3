import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyClusterSnapshot } from "../model/ModifyClusterSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyClusterSnapshotInput } from "../types/ModifyClusterSnapshotInput";
import { ModifyClusterSnapshotOutput } from "../types/ModifyClusterSnapshotOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ModifyClusterSnapshotInput";
export * from "../types/ModifyClusterSnapshotOutput";
export * from "../types/ModifyClusterSnapshotExceptionsUnion";

export class ModifyClusterSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyClusterSnapshotInput,
      OutputTypesUnion,
      ModifyClusterSnapshotOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClusterSnapshotInput,
    ModifyClusterSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyClusterSnapshotInput,
    ModifyClusterSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyClusterSnapshotInput, ModifyClusterSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
