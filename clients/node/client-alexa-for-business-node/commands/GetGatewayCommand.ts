import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetGateway } from "../model/GetGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGatewayInput } from "../types/GetGatewayInput";
import { GetGatewayOutput } from "../types/GetGatewayOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/GetGatewayInput";
export * from "../types/GetGatewayOutput";
export * from "../types/GetGatewayExceptionsUnion";

export class GetGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGatewayInput,
      OutputTypesUnion,
      GetGatewayOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGatewayInput,
    GetGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGatewayInput, GetGatewayOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGatewayInput, GetGatewayOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
