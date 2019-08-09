import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListLaunchPaths } from "../model/ListLaunchPaths";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLaunchPathsInput } from "../types/ListLaunchPathsInput";
import { ListLaunchPathsOutput } from "../types/ListLaunchPathsOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListLaunchPathsInput";
export * from "../types/ListLaunchPathsOutput";
export * from "../types/ListLaunchPathsExceptionsUnion";

export class ListLaunchPathsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLaunchPathsInput,
      OutputTypesUnion,
      ListLaunchPathsOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListLaunchPaths;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLaunchPathsInput,
    ListLaunchPathsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListLaunchPathsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<ListLaunchPathsInput, ListLaunchPathsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLaunchPathsInput, ListLaunchPathsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
