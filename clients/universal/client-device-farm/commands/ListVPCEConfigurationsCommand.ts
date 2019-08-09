import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListVPCEConfigurations } from "../model/ListVPCEConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVPCEConfigurationsInput } from "../types/ListVPCEConfigurationsInput";
import { ListVPCEConfigurationsOutput } from "../types/ListVPCEConfigurationsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListVPCEConfigurationsInput";
export * from "../types/ListVPCEConfigurationsOutput";
export * from "../types/ListVPCEConfigurationsExceptionsUnion";

export class ListVPCEConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVPCEConfigurationsInput,
      OutputTypesUnion,
      ListVPCEConfigurationsOutput,
      DeviceFarmResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListVPCEConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVPCEConfigurationsInput,
    ListVPCEConfigurationsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListVPCEConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListVPCEConfigurationsInput,
    ListVPCEConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListVPCEConfigurationsInput, ListVPCEConfigurationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
