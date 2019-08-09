import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetApiKeys } from "../model/GetApiKeys";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApiKeysInput } from "../types/GetApiKeysInput";
import { GetApiKeysOutput } from "../types/GetApiKeysOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetApiKeysInput";
export * from "../types/GetApiKeysOutput";
export * from "../types/GetApiKeysExceptionsUnion";

export class GetApiKeysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApiKeysInput,
      OutputTypesUnion,
      GetApiKeysOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetApiKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApiKeysInput,
    GetApiKeysOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetApiKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetApiKeysInput, GetApiKeysOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApiKeysInput, GetApiKeysOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
