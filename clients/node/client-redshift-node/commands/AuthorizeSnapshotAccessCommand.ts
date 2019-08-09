import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AuthorizeSnapshotAccess } from "../model/AuthorizeSnapshotAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AuthorizeSnapshotAccessInput } from "../types/AuthorizeSnapshotAccessInput";
import { AuthorizeSnapshotAccessOutput } from "../types/AuthorizeSnapshotAccessOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/AuthorizeSnapshotAccessInput";
export * from "../types/AuthorizeSnapshotAccessOutput";
export * from "../types/AuthorizeSnapshotAccessExceptionsUnion";

export class AuthorizeSnapshotAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AuthorizeSnapshotAccessInput,
      OutputTypesUnion,
      AuthorizeSnapshotAccessOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AuthorizeSnapshotAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AuthorizeSnapshotAccessInput,
    AuthorizeSnapshotAccessOutput,
    _stream.Readable
  >();

  constructor(readonly input: AuthorizeSnapshotAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AuthorizeSnapshotAccessInput,
    AuthorizeSnapshotAccessOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AuthorizeSnapshotAccessInput, AuthorizeSnapshotAccessOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
