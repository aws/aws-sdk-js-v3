import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListWorkflows } from "../model/ListWorkflows";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListWorkflowsInput } from "../types/ListWorkflowsInput";
import { ListWorkflowsOutput } from "../types/ListWorkflowsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/ListWorkflowsInput";
export * from "../types/ListWorkflowsOutput";
export * from "../types/ListWorkflowsExceptionsUnion";

export class ListWorkflowsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListWorkflowsInput,
      OutputTypesUnion,
      ListWorkflowsOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListWorkflows;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListWorkflowsInput,
    ListWorkflowsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListWorkflowsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<ListWorkflowsInput, ListWorkflowsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListWorkflowsInput, ListWorkflowsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
