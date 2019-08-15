import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TestConnection } from "../model/operations/TestConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TestConnectionInput } from "../types/TestConnectionInput";
import { TestConnectionOutput } from "../types/TestConnectionOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/TestConnectionInput";
export * from "../types/TestConnectionOutput";
export * from "../types/TestConnectionExceptionsUnion";

export class TestConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TestConnectionInput,
      OutputTypesUnion,
      TestConnectionOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TestConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TestConnectionInput,
    TestConnectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: TestConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<TestConnectionInput, TestConnectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TestConnectionInput, TestConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
