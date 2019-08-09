import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListMFADevices } from "../model/ListMFADevices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListMFADevicesInput } from "../types/ListMFADevicesInput";
import { ListMFADevicesOutput } from "../types/ListMFADevicesOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListMFADevicesInput";
export * from "../types/ListMFADevicesOutput";
export * from "../types/ListMFADevicesExceptionsUnion";

export class ListMFADevicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListMFADevicesInput,
      OutputTypesUnion,
      ListMFADevicesOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListMFADevices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListMFADevicesInput,
    ListMFADevicesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListMFADevicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListMFADevicesInput, ListMFADevicesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListMFADevicesInput, ListMFADevicesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
