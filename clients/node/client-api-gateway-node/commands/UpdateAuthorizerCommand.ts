import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAuthorizer } from "../model/UpdateAuthorizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAuthorizerInput } from "../types/UpdateAuthorizerInput";
import { UpdateAuthorizerOutput } from "../types/UpdateAuthorizerOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateAuthorizerInput";
export * from "../types/UpdateAuthorizerOutput";
export * from "../types/UpdateAuthorizerExceptionsUnion";

export class UpdateAuthorizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAuthorizerInput,
      OutputTypesUnion,
      UpdateAuthorizerOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAuthorizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAuthorizerInput,
    UpdateAuthorizerOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAuthorizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateAuthorizerInput, UpdateAuthorizerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAuthorizerInput, UpdateAuthorizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
