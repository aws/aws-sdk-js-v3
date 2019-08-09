import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListWorkflowTypes } from "../model/ListWorkflowTypes";
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
      _stream.Readable
    > {
  readonly model = ListWorkflowTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListWorkflowTypesInput,
    ListWorkflowTypesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListWorkflowTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
