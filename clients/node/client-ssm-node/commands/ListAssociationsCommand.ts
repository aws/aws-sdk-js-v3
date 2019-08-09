import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAssociations } from "../model/ListAssociations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssociationsInput } from "../types/ListAssociationsInput";
import { ListAssociationsOutput } from "../types/ListAssociationsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListAssociationsInput";
export * from "../types/ListAssociationsOutput";
export * from "../types/ListAssociationsExceptionsUnion";

export class ListAssociationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssociationsInput,
      OutputTypesUnion,
      ListAssociationsOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAssociations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssociationsInput,
    ListAssociationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAssociationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAssociationsInput, ListAssociationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAssociationsInput, ListAssociationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
