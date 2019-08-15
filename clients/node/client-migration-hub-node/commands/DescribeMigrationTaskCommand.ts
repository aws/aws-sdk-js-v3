import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeMigrationTask } from "../model/operations/DescribeMigrationTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMigrationTaskInput } from "../types/DescribeMigrationTaskInput";
import { DescribeMigrationTaskOutput } from "../types/DescribeMigrationTaskOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/DescribeMigrationTaskInput";
export * from "../types/DescribeMigrationTaskOutput";
export * from "../types/DescribeMigrationTaskExceptionsUnion";

export class DescribeMigrationTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMigrationTaskInput,
      OutputTypesUnion,
      DescribeMigrationTaskOutput,
      MigrationHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeMigrationTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMigrationTaskInput,
    DescribeMigrationTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeMigrationTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMigrationTaskInput,
    DescribeMigrationTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeMigrationTaskInput, DescribeMigrationTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
