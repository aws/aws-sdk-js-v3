import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRestApi } from "../model/operations/DeleteRestApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRestApiInput } from "../types/DeleteRestApiInput";
import { DeleteRestApiOutput } from "../types/DeleteRestApiOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteRestApiInput";
export * from "../types/DeleteRestApiOutput";
export * from "../types/DeleteRestApiExceptionsUnion";

export class DeleteRestApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRestApiInput,
      OutputTypesUnion,
      DeleteRestApiOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRestApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRestApiInput,
    DeleteRestApiOutput,
    Blob
  >();

  constructor(readonly input: DeleteRestApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRestApiInput, DeleteRestApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRestApiInput, DeleteRestApiOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
