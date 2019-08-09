import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDiscoveredResources } from "../model/ListDiscoveredResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDiscoveredResourcesInput } from "../types/ListDiscoveredResourcesInput";
import { ListDiscoveredResourcesOutput } from "../types/ListDiscoveredResourcesOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/ListDiscoveredResourcesInput";
export * from "../types/ListDiscoveredResourcesOutput";
export * from "../types/ListDiscoveredResourcesExceptionsUnion";

export class ListDiscoveredResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDiscoveredResourcesInput,
      OutputTypesUnion,
      ListDiscoveredResourcesOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListDiscoveredResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDiscoveredResourcesInput,
    ListDiscoveredResourcesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListDiscoveredResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDiscoveredResourcesInput,
    ListDiscoveredResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDiscoveredResourcesInput, ListDiscoveredResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
