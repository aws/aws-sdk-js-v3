import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListJobsByStatus } from "../model/operations/ListJobsByStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListJobsByStatusInput } from "../types/ListJobsByStatusInput";
import { ListJobsByStatusOutput } from "../types/ListJobsByStatusOutput";
import { ElasticTranscoderResolvedConfiguration } from "../ElasticTranscoderConfiguration";
export * from "../types/ListJobsByStatusInput";
export * from "../types/ListJobsByStatusOutput";
export * from "../types/ListJobsByStatusExceptionsUnion";

export class ListJobsByStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListJobsByStatusInput,
      OutputTypesUnion,
      ListJobsByStatusOutput,
      ElasticTranscoderResolvedConfiguration,
      Blob
    > {
  readonly model = ListJobsByStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListJobsByStatusInput,
    ListJobsByStatusOutput,
    Blob
  >();

  constructor(readonly input: ListJobsByStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticTranscoderResolvedConfiguration
  ): __aws_sdk_types.Handler<ListJobsByStatusInput, ListJobsByStatusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListJobsByStatusInput, ListJobsByStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
