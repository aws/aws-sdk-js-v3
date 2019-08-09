import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListActionTypes } from "../model/ListActionTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListActionTypesInput } from "../types/ListActionTypesInput";
import { ListActionTypesOutput } from "../types/ListActionTypesOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/ListActionTypesInput";
export * from "../types/ListActionTypesOutput";
export * from "../types/ListActionTypesExceptionsUnion";

export class ListActionTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListActionTypesInput,
      OutputTypesUnion,
      ListActionTypesOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = ListActionTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListActionTypesInput,
    ListActionTypesOutput,
    Blob
  >();

  constructor(readonly input: ListActionTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<ListActionTypesInput, ListActionTypesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListActionTypesInput, ListActionTypesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
