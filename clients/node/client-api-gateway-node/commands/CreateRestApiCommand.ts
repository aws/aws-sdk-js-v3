import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRestApi } from "../model/CreateRestApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRestApiInput } from "../types/CreateRestApiInput";
import { CreateRestApiOutput } from "../types/CreateRestApiOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateRestApiInput";
export * from "../types/CreateRestApiOutput";
export * from "../types/CreateRestApiExceptionsUnion";

export class CreateRestApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRestApiInput,
      OutputTypesUnion,
      CreateRestApiOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRestApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRestApiInput,
    CreateRestApiOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRestApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRestApiInput, CreateRestApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRestApiInput, CreateRestApiOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
