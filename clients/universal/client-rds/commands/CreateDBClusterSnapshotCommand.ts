import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDBClusterSnapshot } from "../model/CreateDBClusterSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBClusterSnapshotInput } from "../types/CreateDBClusterSnapshotInput";
import { CreateDBClusterSnapshotOutput } from "../types/CreateDBClusterSnapshotOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CreateDBClusterSnapshotInput";
export * from "../types/CreateDBClusterSnapshotOutput";
export * from "../types/CreateDBClusterSnapshotExceptionsUnion";

export class CreateDBClusterSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBClusterSnapshotInput,
      OutputTypesUnion,
      CreateDBClusterSnapshotOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateDBClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBClusterSnapshotInput,
    CreateDBClusterSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateDBClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDBClusterSnapshotInput,
    CreateDBClusterSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDBClusterSnapshotInput, CreateDBClusterSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
