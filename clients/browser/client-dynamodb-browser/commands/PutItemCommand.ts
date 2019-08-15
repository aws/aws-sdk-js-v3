import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutItem } from "../model/operations/PutItem";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutItemInput } from "../types/PutItemInput";
import { PutItemOutput } from "../types/PutItemOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/PutItemInput";
export * from "../types/PutItemOutput";
export * from "../types/PutItemExceptionsUnion";

export class PutItemCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutItemInput,
      OutputTypesUnion,
      PutItemOutput,
      DynamoDBResolvedConfiguration,
      Blob
    > {
  readonly model = PutItem;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutItemInput,
    PutItemOutput,
    Blob
  >();

  constructor(readonly input: PutItemInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<PutItemInput, PutItemOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutItemInput, PutItemOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
