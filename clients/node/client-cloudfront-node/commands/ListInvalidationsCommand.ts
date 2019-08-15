import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListInvalidations } from "../model/operations/ListInvalidations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListInvalidationsInput } from "../types/ListInvalidationsInput";
import { ListInvalidationsOutput } from "../types/ListInvalidationsOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListInvalidationsInput";
export * from "../types/ListInvalidationsOutput";
export * from "../types/ListInvalidationsExceptionsUnion";

export class ListInvalidationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListInvalidationsInput,
      OutputTypesUnion,
      ListInvalidationsOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListInvalidations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInvalidationsInput,
    ListInvalidationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListInvalidationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<ListInvalidationsInput, ListInvalidationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListInvalidationsInput, ListInvalidationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
