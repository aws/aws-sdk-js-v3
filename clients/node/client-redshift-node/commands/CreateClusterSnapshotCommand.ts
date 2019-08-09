import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = CreateClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateClusterSnapshotInput,
    CreateClusterSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
