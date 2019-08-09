import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateEndpointGroup } from "../model/CreateEndpointGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEndpointGroupInput } from "../types/CreateEndpointGroupInput";
import { CreateEndpointGroupOutput } from "../types/CreateEndpointGroupOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/CreateEndpointGroupInput";
export * from "../types/CreateEndpointGroupOutput";
export * from "../types/CreateEndpointGroupExceptionsUnion";

export class CreateEndpointGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEndpointGroupInput,
      OutputTypesUnion,
      CreateEndpointGroupOutput,
      GlobalAcceleratorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateEndpointGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEndpointGroupInput,
    CreateEndpointGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateEndpointGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateEndpointGroupInput,
    CreateEndpointGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEndpointGroupInput, CreateEndpointGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
