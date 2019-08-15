import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDataflowEndpointGroup } from "../model/operations/GetDataflowEndpointGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDataflowEndpointGroupInput } from "../types/GetDataflowEndpointGroupInput";
import { GetDataflowEndpointGroupOutput } from "../types/GetDataflowEndpointGroupOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/GetDataflowEndpointGroupInput";
export * from "../types/GetDataflowEndpointGroupOutput";
export * from "../types/GetDataflowEndpointGroupExceptionsUnion";

export class GetDataflowEndpointGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDataflowEndpointGroupInput,
      OutputTypesUnion,
      GetDataflowEndpointGroupOutput,
      GroundStationResolvedConfiguration,
      Blob
    > {
  readonly model = GetDataflowEndpointGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDataflowEndpointGroupInput,
    GetDataflowEndpointGroupOutput,
    Blob
  >();

  constructor(readonly input: GetDataflowEndpointGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDataflowEndpointGroupInput,
    GetDataflowEndpointGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDataflowEndpointGroupInput, GetDataflowEndpointGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
