import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListWorkflowTypes } from "../model/operations/ListWorkflowTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListWorkflowTypesInput } from "../types/ListWorkflowTypesInput";
import { ListWorkflowTypesOutput } from "../types/ListWorkflowTypesOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/ListWorkflowTypesInput";
export * from "../types/ListWorkflowTypesOutput";
export * from "../types/ListWorkflowTypesExceptionsUnion";

export class ListWorkflowTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListWorkflowTypesInput,
      OutputTypesUnion,
      ListWorkflowTypesOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = ListWorkflowTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListWorkflowTypesInput,
    ListWorkflowTypesOutput,
    Blob
  >();

  constructor(readonly input: ListWorkflowTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<ListWorkflowTypesInput, ListWorkflowTypesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListWorkflowTypesInput, ListWorkflowTypesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
