import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListBackups } from "../model/ListBackups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBackupsInput } from "../types/ListBackupsInput";
import { ListBackupsOutput } from "../types/ListBackupsOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/ListBackupsInput";
export * from "../types/ListBackupsOutput";
export * from "../types/ListBackupsExceptionsUnion";

export class ListBackupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBackupsInput,
      OutputTypesUnion,
      ListBackupsOutput,
      DynamoDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListBackups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBackupsInput,
    ListBackupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBackupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<ListBackupsInput, ListBackupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBackupsInput, ListBackupsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
