import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListParts } from "../model/ListParts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPartsInput } from "../types/ListPartsInput";
import { ListPartsOutput } from "../types/ListPartsOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/ListPartsInput";
export * from "../types/ListPartsOutput";
export * from "../types/ListPartsExceptionsUnion";

export class ListPartsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPartsInput,
      OutputTypesUnion,
      ListPartsOutput,
      GlacierResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListParts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPartsInput,
    ListPartsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListPartsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPartsInput, ListPartsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPartsInput, ListPartsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
