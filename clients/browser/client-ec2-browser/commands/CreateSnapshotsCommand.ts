import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSnapshots } from "../model/CreateSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSnapshotsInput } from "../types/CreateSnapshotsInput";
import { CreateSnapshotsOutput } from "../types/CreateSnapshotsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateSnapshotsInput";
export * from "../types/CreateSnapshotsOutput";
export * from "../types/CreateSnapshotsExceptionsUnion";

export class CreateSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSnapshotsInput,
      OutputTypesUnion,
      CreateSnapshotsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSnapshotsInput,
    CreateSnapshotsOutput,
    Blob
  >();

  constructor(readonly input: CreateSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateSnapshotsInput, CreateSnapshotsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSnapshotsInput, CreateSnapshotsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
