import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEndpointGroups } from "../model/operations/ListEndpointGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEndpointGroupsInput } from "../types/ListEndpointGroupsInput";
import { ListEndpointGroupsOutput } from "../types/ListEndpointGroupsOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/ListEndpointGroupsInput";
export * from "../types/ListEndpointGroupsOutput";
export * from "../types/ListEndpointGroupsExceptionsUnion";

export class ListEndpointGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEndpointGroupsInput,
      OutputTypesUnion,
      ListEndpointGroupsOutput,
      GlobalAcceleratorResolvedConfiguration,
      Blob
    > {
  readonly model = ListEndpointGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEndpointGroupsInput,
    ListEndpointGroupsOutput,
    Blob
  >();

  constructor(readonly input: ListEndpointGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListEndpointGroupsInput,
    ListEndpointGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEndpointGroupsInput, ListEndpointGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
