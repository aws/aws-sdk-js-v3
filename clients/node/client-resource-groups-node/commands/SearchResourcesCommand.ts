import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchResources } from "../model/SearchResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchResourcesInput } from "../types/SearchResourcesInput";
import { SearchResourcesOutput } from "../types/SearchResourcesOutput";
import { ResourceGroupsResolvedConfiguration } from "../ResourceGroupsConfiguration";
export * from "../types/SearchResourcesInput";
export * from "../types/SearchResourcesOutput";
export * from "../types/SearchResourcesExceptionsUnion";

export class SearchResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchResourcesInput,
      OutputTypesUnion,
      SearchResourcesOutput,
      ResourceGroupsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SearchResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchResourcesInput,
    SearchResourcesOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ResourceGroupsResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchResourcesInput, SearchResourcesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchResourcesInput, SearchResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
