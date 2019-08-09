import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDBSnapshot } from "../model/CreateDBSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBSnapshotInput } from "../types/CreateDBSnapshotInput";
import { CreateDBSnapshotOutput } from "../types/CreateDBSnapshotOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CreateDBSnapshotInput";
export * from "../types/CreateDBSnapshotOutput";
export * from "../types/CreateDBSnapshotExceptionsUnion";

export class CreateDBSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBSnapshotInput,
      OutputTypesUnion,
      CreateDBSnapshotOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDBSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBSnapshotInput,
    CreateDBSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDBSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDBSnapshotInput, CreateDBSnapshotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDBSnapshotInput, CreateDBSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
