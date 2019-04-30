import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateGlobalTable } from "../model/CreateGlobalTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGlobalTableInput } from "../types/CreateGlobalTableInput";
import { CreateGlobalTableOutput } from "../types/CreateGlobalTableOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/CreateGlobalTableInput";
export * from "../types/CreateGlobalTableOutput";
export * from "../types/CreateGlobalTableExceptionsUnion";

export class CreateGlobalTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGlobalTableInput,
      OutputTypesUnion,
      CreateGlobalTableOutput,
      DynamoDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGlobalTableInput,
    CreateGlobalTableOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateGlobalTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateGlobalTableInput, CreateGlobalTableOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: CreateGlobalTable
    };

    return stack.resolve(
      handler<CreateGlobalTableInput, CreateGlobalTableOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
