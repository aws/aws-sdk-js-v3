import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ShutdownGateway } from "../model/operations/ShutdownGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ShutdownGatewayInput } from "../types/ShutdownGatewayInput";
import { ShutdownGatewayOutput } from "../types/ShutdownGatewayOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/ShutdownGatewayInput";
export * from "../types/ShutdownGatewayOutput";
export * from "../types/ShutdownGatewayExceptionsUnion";

export class ShutdownGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ShutdownGatewayInput,
      OutputTypesUnion,
      ShutdownGatewayOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = ShutdownGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ShutdownGatewayInput,
    ShutdownGatewayOutput,
    Blob
  >();

  constructor(readonly input: ShutdownGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<ShutdownGatewayInput, ShutdownGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ShutdownGatewayInput, ShutdownGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
