import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListLayers } from "../model/ListLayers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLayersInput } from "../types/ListLayersInput";
import { ListLayersOutput } from "../types/ListLayersOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/ListLayersInput";
export * from "../types/ListLayersOutput";
export * from "../types/ListLayersExceptionsUnion";

export class ListLayersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLayersInput,
      OutputTypesUnion,
      ListLayersOutput,
      LambdaResolvedConfiguration,
      Blob
    > {
  readonly model = ListLayers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLayersInput,
    ListLayersOutput,
    Blob
  >();

  constructor(readonly input: ListLayersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<ListLayersInput, ListLayersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLayersInput, ListLayersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
