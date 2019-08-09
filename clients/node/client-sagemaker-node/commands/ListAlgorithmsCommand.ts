import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAlgorithms } from "../model/ListAlgorithms";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAlgorithmsInput } from "../types/ListAlgorithmsInput";
import { ListAlgorithmsOutput } from "../types/ListAlgorithmsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListAlgorithmsInput";
export * from "../types/ListAlgorithmsOutput";
export * from "../types/ListAlgorithmsExceptionsUnion";

export class ListAlgorithmsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAlgorithmsInput,
      OutputTypesUnion,
      ListAlgorithmsOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAlgorithms;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAlgorithmsInput,
    ListAlgorithmsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAlgorithmsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAlgorithmsInput, ListAlgorithmsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAlgorithmsInput, ListAlgorithmsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
