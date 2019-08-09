import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListActivityTypes } from "../model/ListActivityTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListActivityTypesInput } from "../types/ListActivityTypesInput";
import { ListActivityTypesOutput } from "../types/ListActivityTypesOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/ListActivityTypesInput";
export * from "../types/ListActivityTypesOutput";
export * from "../types/ListActivityTypesExceptionsUnion";

export class ListActivityTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListActivityTypesInput,
      OutputTypesUnion,
      ListActivityTypesOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListActivityTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListActivityTypesInput,
    ListActivityTypesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListActivityTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<ListActivityTypesInput, ListActivityTypesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListActivityTypesInput, ListActivityTypesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
