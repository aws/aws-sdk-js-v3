import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSnapshot } from "../model/CreateSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSnapshotInput } from "../types/CreateSnapshotInput";
import { CreateSnapshotOutput } from "../types/CreateSnapshotOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateSnapshotInput";
export * from "../types/CreateSnapshotOutput";
export * from "../types/CreateSnapshotExceptionsUnion";

export class CreateSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSnapshotInput,
      OutputTypesUnion,
      CreateSnapshotOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSnapshotInput,
    CreateSnapshotOutput,
    Blob
  >();

  constructor(readonly input: CreateSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateSnapshotInput, CreateSnapshotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSnapshotInput, CreateSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
