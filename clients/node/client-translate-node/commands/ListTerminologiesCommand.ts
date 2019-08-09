import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTerminologies } from "../model/ListTerminologies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTerminologiesInput } from "../types/ListTerminologiesInput";
import { ListTerminologiesOutput } from "../types/ListTerminologiesOutput";
import { TranslateResolvedConfiguration } from "../TranslateConfiguration";
export * from "../types/ListTerminologiesInput";
export * from "../types/ListTerminologiesOutput";
export * from "../types/ListTerminologiesExceptionsUnion";

export class ListTerminologiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTerminologiesInput,
      OutputTypesUnion,
      ListTerminologiesOutput,
      TranslateResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTerminologies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTerminologiesInput,
    ListTerminologiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTerminologiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TranslateResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTerminologiesInput, ListTerminologiesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTerminologiesInput, ListTerminologiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
