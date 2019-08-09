import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDataflowEndpointGroup } from "../model/CreateDataflowEndpointGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDataflowEndpointGroupInput } from "../types/CreateDataflowEndpointGroupInput";
import { CreateDataflowEndpointGroupOutput } from "../types/CreateDataflowEndpointGroupOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/CreateDataflowEndpointGroupInput";
export * from "../types/CreateDataflowEndpointGroupOutput";
export * from "../types/CreateDataflowEndpointGroupExceptionsUnion";

export class CreateDataflowEndpointGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDataflowEndpointGroupInput,
      OutputTypesUnion,
      CreateDataflowEndpointGroupOutput,
      GroundStationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDataflowEndpointGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDataflowEndpointGroupInput,
    CreateDataflowEndpointGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDataflowEndpointGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDataflowEndpointGroupInput,
    CreateDataflowEndpointGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDataflowEndpointGroupInput,
        CreateDataflowEndpointGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
