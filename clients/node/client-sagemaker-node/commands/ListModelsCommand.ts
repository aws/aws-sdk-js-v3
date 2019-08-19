import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListModels } from "../model/operations/ListModels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListModelsInput } from "../types/ListModelsInput";
import { ListModelsOutput } from "../types/ListModelsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListModelsInput";
export * from "../types/ListModelsOutput";
export * from "../types/ListModelsExceptionsUnion";

export class ListModelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListModelsInput,
      OutputTypesUnion,
      ListModelsOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListModels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListModelsInput,
    ListModelsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListModelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<ListModelsInput, ListModelsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListModelsInput, ListModelsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
