import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetItem } from "../model/GetItem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetItemInput } from "../types/GetItemInput";
import { GetItemOutput } from "../types/GetItemOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/GetItemInput";
export * from "../types/GetItemOutput";
export * from "../types/GetItemExceptionsUnion";

export class GetItemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetItemInput,
      OutputTypesUnion,
      GetItemOutput,
      DynamoDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetItem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetItemInput,
    GetItemOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetItemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<GetItemInput, GetItemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetItemInput, GetItemOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
