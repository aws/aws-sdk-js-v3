import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTemplates } from "../model/ListTemplates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTemplatesInput } from "../types/ListTemplatesInput";
import { ListTemplatesOutput } from "../types/ListTemplatesOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/ListTemplatesInput";
export * from "../types/ListTemplatesOutput";
export * from "../types/ListTemplatesExceptionsUnion";

export class ListTemplatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTemplatesInput,
      OutputTypesUnion,
      ListTemplatesOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListTemplates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTemplatesInput,
    ListTemplatesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListTemplatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTemplatesInput, ListTemplatesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTemplatesInput, ListTemplatesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
