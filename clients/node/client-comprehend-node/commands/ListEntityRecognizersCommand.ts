import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListEntityRecognizers } from "../model/operations/ListEntityRecognizers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEntityRecognizersInput } from "../types/ListEntityRecognizersInput";
import { ListEntityRecognizersOutput } from "../types/ListEntityRecognizersOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/ListEntityRecognizersInput";
export * from "../types/ListEntityRecognizersOutput";
export * from "../types/ListEntityRecognizersExceptionsUnion";

export class ListEntityRecognizersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEntityRecognizersInput,
      OutputTypesUnion,
      ListEntityRecognizersOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListEntityRecognizers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEntityRecognizersInput,
    ListEntityRecognizersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListEntityRecognizersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListEntityRecognizersInput,
    ListEntityRecognizersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEntityRecognizersInput, ListEntityRecognizersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
