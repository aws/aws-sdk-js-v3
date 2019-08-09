import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDeviceInstances } from "../model/ListDeviceInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeviceInstancesInput } from "../types/ListDeviceInstancesInput";
import { ListDeviceInstancesOutput } from "../types/ListDeviceInstancesOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListDeviceInstancesInput";
export * from "../types/ListDeviceInstancesOutput";
export * from "../types/ListDeviceInstancesExceptionsUnion";

export class ListDeviceInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeviceInstancesInput,
      OutputTypesUnion,
      ListDeviceInstancesOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDeviceInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeviceInstancesInput,
    ListDeviceInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDeviceInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDeviceInstancesInput,
    ListDeviceInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDeviceInstancesInput, ListDeviceInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
