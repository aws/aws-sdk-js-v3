import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateEndpointGroup } from "../model/operations/UpdateEndpointGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEndpointGroupInput } from "../types/UpdateEndpointGroupInput";
import { UpdateEndpointGroupOutput } from "../types/UpdateEndpointGroupOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/UpdateEndpointGroupInput";
export * from "../types/UpdateEndpointGroupOutput";
export * from "../types/UpdateEndpointGroupExceptionsUnion";

export class UpdateEndpointGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEndpointGroupInput,
      OutputTypesUnion,
      UpdateEndpointGroupOutput,
      GlobalAcceleratorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateEndpointGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEndpointGroupInput,
    UpdateEndpointGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateEndpointGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateEndpointGroupInput,
    UpdateEndpointGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateEndpointGroupInput, UpdateEndpointGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
