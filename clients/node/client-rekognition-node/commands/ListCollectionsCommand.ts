import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListCollections } from "../model/ListCollections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCollectionsInput } from "../types/ListCollectionsInput";
import { ListCollectionsOutput } from "../types/ListCollectionsOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/ListCollectionsInput";
export * from "../types/ListCollectionsOutput";
export * from "../types/ListCollectionsExceptionsUnion";

export class ListCollectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCollectionsInput,
      OutputTypesUnion,
      ListCollectionsOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListCollections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCollectionsInput,
    ListCollectionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListCollectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<ListCollectionsInput, ListCollectionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCollectionsInput, ListCollectionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
