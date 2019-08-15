import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetApiKey } from "../model/operations/GetApiKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApiKeyInput } from "../types/GetApiKeyInput";
import { GetApiKeyOutput } from "../types/GetApiKeyOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetApiKeyInput";
export * from "../types/GetApiKeyOutput";
export * from "../types/GetApiKeyExceptionsUnion";

export class GetApiKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApiKeyInput,
      OutputTypesUnion,
      GetApiKeyOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetApiKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApiKeyInput,
    GetApiKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetApiKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetApiKeyInput, GetApiKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApiKeyInput, GetApiKeyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
