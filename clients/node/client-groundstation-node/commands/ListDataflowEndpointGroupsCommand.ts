import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDataflowEndpointGroups } from "../model/ListDataflowEndpointGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDataflowEndpointGroupsInput } from "../types/ListDataflowEndpointGroupsInput";
import { ListDataflowEndpointGroupsOutput } from "../types/ListDataflowEndpointGroupsOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/ListDataflowEndpointGroupsInput";
export * from "../types/ListDataflowEndpointGroupsOutput";
export * from "../types/ListDataflowEndpointGroupsExceptionsUnion";

export class ListDataflowEndpointGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDataflowEndpointGroupsInput,
      OutputTypesUnion,
      ListDataflowEndpointGroupsOutput,
      GroundStationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDataflowEndpointGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDataflowEndpointGroupsInput,
    ListDataflowEndpointGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDataflowEndpointGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDataflowEndpointGroupsInput,
    ListDataflowEndpointGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListDataflowEndpointGroupsInput,
        ListDataflowEndpointGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
