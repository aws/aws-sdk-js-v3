import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetApi } from "../model/operations/GetApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApiInput } from "../types/GetApiInput";
import { GetApiOutput } from "../types/GetApiOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetApiInput";
export * from "../types/GetApiOutput";
export * from "../types/GetApiExceptionsUnion";

export class GetApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApiInput,
      OutputTypesUnion,
      GetApiOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApiInput,
    GetApiOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetApiInput, GetApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApiInput, GetApiOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
