import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateItem } from "../model/UpdateItem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateItemInput } from "../types/UpdateItemInput";
import { UpdateItemOutput } from "../types/UpdateItemOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/UpdateItemInput";
export * from "../types/UpdateItemOutput";
export * from "../types/UpdateItemExceptionsUnion";

export class UpdateItemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateItemInput,
      OutputTypesUnion,
      UpdateItemOutput,
      DynamoDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateItemInput,
    UpdateItemOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateItemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateItemInput, UpdateItemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: UpdateItem
    };

    return stack.resolve(
      handler<UpdateItemInput, UpdateItemOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
