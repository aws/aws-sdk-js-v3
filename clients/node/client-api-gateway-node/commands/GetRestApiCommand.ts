import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRestApi } from "../model/GetRestApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRestApiInput } from "../types/GetRestApiInput";
import { GetRestApiOutput } from "../types/GetRestApiOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetRestApiInput";
export * from "../types/GetRestApiOutput";
export * from "../types/GetRestApiExceptionsUnion";

export class GetRestApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRestApiInput,
      OutputTypesUnion,
      GetRestApiOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRestApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRestApiInput,
    GetRestApiOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRestApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRestApiInput, GetRestApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRestApiInput, GetRestApiOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
