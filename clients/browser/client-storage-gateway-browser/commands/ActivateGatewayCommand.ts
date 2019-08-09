import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ActivateGateway } from "../model/ActivateGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ActivateGatewayInput } from "../types/ActivateGatewayInput";
import { ActivateGatewayOutput } from "../types/ActivateGatewayOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/ActivateGatewayInput";
export * from "../types/ActivateGatewayOutput";
export * from "../types/ActivateGatewayExceptionsUnion";

export class ActivateGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ActivateGatewayInput,
      OutputTypesUnion,
      ActivateGatewayOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = ActivateGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ActivateGatewayInput,
    ActivateGatewayOutput,
    Blob
  >();

  constructor(readonly input: ActivateGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<ActivateGatewayInput, ActivateGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ActivateGatewayInput, ActivateGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
