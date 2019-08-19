import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPipelineExecutions } from "../model/operations/ListPipelineExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPipelineExecutionsInput } from "../types/ListPipelineExecutionsInput";
import { ListPipelineExecutionsOutput } from "../types/ListPipelineExecutionsOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/ListPipelineExecutionsInput";
export * from "../types/ListPipelineExecutionsOutput";
export * from "../types/ListPipelineExecutionsExceptionsUnion";

export class ListPipelineExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPipelineExecutionsInput,
      OutputTypesUnion,
      ListPipelineExecutionsOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = ListPipelineExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPipelineExecutionsInput,
    ListPipelineExecutionsOutput,
    Blob
  >();

  constructor(readonly input: ListPipelineExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPipelineExecutionsInput,
    ListPipelineExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPipelineExecutionsInput, ListPipelineExecutionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
