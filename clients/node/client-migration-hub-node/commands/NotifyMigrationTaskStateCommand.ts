import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { NotifyMigrationTaskState } from "../model/NotifyMigrationTaskState";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { NotifyMigrationTaskStateInput } from "../types/NotifyMigrationTaskStateInput";
import { NotifyMigrationTaskStateOutput } from "../types/NotifyMigrationTaskStateOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/NotifyMigrationTaskStateInput";
export * from "../types/NotifyMigrationTaskStateOutput";
export * from "../types/NotifyMigrationTaskStateExceptionsUnion";

export class NotifyMigrationTaskStateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      NotifyMigrationTaskStateInput,
      OutputTypesUnion,
      NotifyMigrationTaskStateOutput,
      MigrationHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = NotifyMigrationTaskState;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    NotifyMigrationTaskStateInput,
    NotifyMigrationTaskStateOutput,
    _stream.Readable
  >();

  constructor(readonly input: NotifyMigrationTaskStateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    NotifyMigrationTaskStateInput,
    NotifyMigrationTaskStateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<NotifyMigrationTaskStateInput, NotifyMigrationTaskStateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
