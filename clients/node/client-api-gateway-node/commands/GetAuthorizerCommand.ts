import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAuthorizer } from "../model/operations/GetAuthorizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAuthorizerInput } from "../types/GetAuthorizerInput";
import { GetAuthorizerOutput } from "../types/GetAuthorizerOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetAuthorizerInput";
export * from "../types/GetAuthorizerOutput";
export * from "../types/GetAuthorizerExceptionsUnion";

export class GetAuthorizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAuthorizerInput,
      OutputTypesUnion,
      GetAuthorizerOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAuthorizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAuthorizerInput,
    GetAuthorizerOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAuthorizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAuthorizerInput, GetAuthorizerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAuthorizerInput, GetAuthorizerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
