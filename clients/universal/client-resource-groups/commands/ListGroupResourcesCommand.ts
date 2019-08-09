import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListGroupResources } from "../model/ListGroupResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGroupResourcesInput } from "../types/ListGroupResourcesInput";
import { ListGroupResourcesOutput } from "../types/ListGroupResourcesOutput";
import { ResourceGroupsResolvedConfiguration } from "../ResourceGroupsConfiguration";
export * from "../types/ListGroupResourcesInput";
export * from "../types/ListGroupResourcesOutput";
export * from "../types/ListGroupResourcesExceptionsUnion";

export class ListGroupResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGroupResourcesInput,
      OutputTypesUnion,
      ListGroupResourcesOutput,
      ResourceGroupsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListGroupResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGroupResourcesInput,
    ListGroupResourcesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListGroupResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ResourceGroupsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListGroupResourcesInput,
    ListGroupResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGroupResourcesInput, ListGroupResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
