import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTagsForProject } from "../model/ListTagsForProject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsForProjectInput } from "../types/ListTagsForProjectInput";
import { ListTagsForProjectOutput } from "../types/ListTagsForProjectOutput";
import { CodeStarResolvedConfiguration } from "../CodeStarConfiguration";
export * from "../types/ListTagsForProjectInput";
export * from "../types/ListTagsForProjectOutput";
export * from "../types/ListTagsForProjectExceptionsUnion";

export class ListTagsForProjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsForProjectInput,
      OutputTypesUnion,
      ListTagsForProjectOutput,
      CodeStarResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTagsForProject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsForProjectInput,
    ListTagsForProjectOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTagsForProjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeStarResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTagsForProjectInput,
    ListTagsForProjectOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagsForProjectInput, ListTagsForProjectOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
