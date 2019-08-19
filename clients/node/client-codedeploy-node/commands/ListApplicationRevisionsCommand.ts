import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListApplicationRevisions } from "../model/operations/ListApplicationRevisions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListApplicationRevisionsInput } from "../types/ListApplicationRevisionsInput";
import { ListApplicationRevisionsOutput } from "../types/ListApplicationRevisionsOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/ListApplicationRevisionsInput";
export * from "../types/ListApplicationRevisionsOutput";
export * from "../types/ListApplicationRevisionsExceptionsUnion";

export class ListApplicationRevisionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListApplicationRevisionsInput,
      OutputTypesUnion,
      ListApplicationRevisionsOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListApplicationRevisions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListApplicationRevisionsInput,
    ListApplicationRevisionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListApplicationRevisionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListApplicationRevisionsInput,
    ListApplicationRevisionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListApplicationRevisionsInput, ListApplicationRevisionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
