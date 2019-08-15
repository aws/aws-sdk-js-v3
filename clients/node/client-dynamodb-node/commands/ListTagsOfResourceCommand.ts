import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTagsOfResource } from "../model/operations/ListTagsOfResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsOfResourceInput } from "../types/ListTagsOfResourceInput";
import { ListTagsOfResourceOutput } from "../types/ListTagsOfResourceOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/ListTagsOfResourceInput";
export * from "../types/ListTagsOfResourceOutput";
export * from "../types/ListTagsOfResourceExceptionsUnion";

export class ListTagsOfResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsOfResourceInput,
      OutputTypesUnion,
      ListTagsOfResourceOutput,
      DynamoDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTagsOfResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsOfResourceInput,
    ListTagsOfResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTagsOfResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTagsOfResourceInput,
    ListTagsOfResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagsOfResourceInput, ListTagsOfResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
