import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableGateway } from "../model/operations/DisableGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableGatewayInput } from "../types/DisableGatewayInput";
import { DisableGatewayOutput } from "../types/DisableGatewayOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DisableGatewayInput";
export * from "../types/DisableGatewayOutput";
export * from "../types/DisableGatewayExceptionsUnion";

export class DisableGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableGatewayInput,
      OutputTypesUnion,
      DisableGatewayOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableGatewayInput,
    DisableGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DisableGatewayInput, DisableGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableGatewayInput, DisableGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
