import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDBClusterSnapshot } from "../model/operations/CreateDBClusterSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBClusterSnapshotInput } from "../types/CreateDBClusterSnapshotInput";
import { CreateDBClusterSnapshotOutput } from "../types/CreateDBClusterSnapshotOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
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
      DocDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDBClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBClusterSnapshotInput,
    CreateDBClusterSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDBClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DocDBResolvedConfiguration
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
