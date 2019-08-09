import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListApplicationVersions } from "../model/ListApplicationVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListApplicationVersionsInput } from "../types/ListApplicationVersionsInput";
import { ListApplicationVersionsOutput } from "../types/ListApplicationVersionsOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/ListApplicationVersionsInput";
export * from "../types/ListApplicationVersionsOutput";
export * from "../types/ListApplicationVersionsExceptionsUnion";

export class ListApplicationVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListApplicationVersionsInput,
      OutputTypesUnion,
      ListApplicationVersionsOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListApplicationVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListApplicationVersionsInput,
    ListApplicationVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListApplicationVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListApplicationVersionsInput,
    ListApplicationVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListApplicationVersionsInput, ListApplicationVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
