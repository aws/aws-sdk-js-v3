import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartGateway } from "../model/StartGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartGatewayInput } from "../types/StartGatewayInput";
import { StartGatewayOutput } from "../types/StartGatewayOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/StartGatewayInput";
export * from "../types/StartGatewayOutput";
export * from "../types/StartGatewayExceptionsUnion";

export class StartGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartGatewayInput,
      OutputTypesUnion,
      StartGatewayOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartGatewayInput,
    StartGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<StartGatewayInput, StartGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartGatewayInput, StartGatewayOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
