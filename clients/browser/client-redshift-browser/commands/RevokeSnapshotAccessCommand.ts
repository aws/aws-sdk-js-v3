import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RevokeSnapshotAccess } from "../model/operations/RevokeSnapshotAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeSnapshotAccessInput } from "../types/RevokeSnapshotAccessInput";
import { RevokeSnapshotAccessOutput } from "../types/RevokeSnapshotAccessOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/RevokeSnapshotAccessInput";
export * from "../types/RevokeSnapshotAccessOutput";
export * from "../types/RevokeSnapshotAccessExceptionsUnion";

export class RevokeSnapshotAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeSnapshotAccessInput,
      OutputTypesUnion,
      RevokeSnapshotAccessOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = RevokeSnapshotAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeSnapshotAccessInput,
    RevokeSnapshotAccessOutput,
    Blob
  >();

  constructor(readonly input: RevokeSnapshotAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RevokeSnapshotAccessInput,
    RevokeSnapshotAccessOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RevokeSnapshotAccessInput, RevokeSnapshotAccessOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
