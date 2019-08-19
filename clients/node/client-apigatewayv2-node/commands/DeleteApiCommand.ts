import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteApi } from "../model/operations/DeleteApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApiInput } from "../types/DeleteApiInput";
import { DeleteApiOutput } from "../types/DeleteApiOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/DeleteApiInput";
export * from "../types/DeleteApiOutput";
export * from "../types/DeleteApiExceptionsUnion";

export class DeleteApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApiInput,
      OutputTypesUnion,
      DeleteApiOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApiInput,
    DeleteApiOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteApiInput, DeleteApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApiInput, DeleteApiOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
