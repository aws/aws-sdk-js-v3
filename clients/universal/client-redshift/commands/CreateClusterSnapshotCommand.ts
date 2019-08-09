import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateClusterSnapshot } from "../model/CreateClusterSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateClusterSnapshotInput } from "../types/CreateClusterSnapshotInput";
import { CreateClusterSnapshotOutput } from "../types/CreateClusterSnapshotOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/CreateClusterSnapshotInput";
export * from "../types/CreateClusterSnapshotOutput";
export * from "../types/CreateClusterSnapshotExceptionsUnion";

export class CreateClusterSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateClusterSnapshotInput,
      OutputTypesUnion,
      CreateClusterSnapshotOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateClusterSnapshotInput,
    CreateClusterSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateClusterSnapshotInput,
    CreateClusterSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateClusterSnapshotInput, CreateClusterSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
