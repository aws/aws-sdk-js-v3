import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAuthorizers } from "../model/operations/GetAuthorizers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAuthorizersInput } from "../types/GetAuthorizersInput";
import { GetAuthorizersOutput } from "../types/GetAuthorizersOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetAuthorizersInput";
export * from "../types/GetAuthorizersOutput";
export * from "../types/GetAuthorizersExceptionsUnion";

export class GetAuthorizersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAuthorizersInput,
      OutputTypesUnion,
      GetAuthorizersOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAuthorizers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAuthorizersInput,
    GetAuthorizersOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAuthorizersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAuthorizersInput, GetAuthorizersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAuthorizersInput, GetAuthorizersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
