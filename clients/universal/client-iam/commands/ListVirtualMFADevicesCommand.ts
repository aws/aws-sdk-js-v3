import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListVirtualMFADevices } from "../model/ListVirtualMFADevices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVirtualMFADevicesInput } from "../types/ListVirtualMFADevicesInput";
import { ListVirtualMFADevicesOutput } from "../types/ListVirtualMFADevicesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListVirtualMFADevicesInput";
export * from "../types/ListVirtualMFADevicesOutput";
export * from "../types/ListVirtualMFADevicesExceptionsUnion";

export class ListVirtualMFADevicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVirtualMFADevicesInput,
      OutputTypesUnion,
      ListVirtualMFADevicesOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListVirtualMFADevices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVirtualMFADevicesInput,
    ListVirtualMFADevicesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListVirtualMFADevicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListVirtualMFADevicesInput,
    ListVirtualMFADevicesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListVirtualMFADevicesInput, ListVirtualMFADevicesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
