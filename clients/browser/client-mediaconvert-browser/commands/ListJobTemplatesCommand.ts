import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListJobTemplates } from "../model/operations/ListJobTemplates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListJobTemplatesInput } from "../types/ListJobTemplatesInput";
import { ListJobTemplatesOutput } from "../types/ListJobTemplatesOutput";
import { MediaConvertResolvedConfiguration } from "../MediaConvertConfiguration";
export * from "../types/ListJobTemplatesInput";
export * from "../types/ListJobTemplatesOutput";
export * from "../types/ListJobTemplatesExceptionsUnion";

export class ListJobTemplatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListJobTemplatesInput,
      OutputTypesUnion,
      ListJobTemplatesOutput,
      MediaConvertResolvedConfiguration,
      Blob
    > {
  readonly model = ListJobTemplates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListJobTemplatesInput,
    ListJobTemplatesOutput,
    Blob
  >();

  constructor(readonly input: ListJobTemplatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaConvertResolvedConfiguration
  ): __aws_sdk_types.Handler<ListJobTemplatesInput, ListJobTemplatesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListJobTemplatesInput, ListJobTemplatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
