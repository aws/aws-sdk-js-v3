import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRestApi } from "../model/UpdateRestApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRestApiInput } from "../types/UpdateRestApiInput";
import { UpdateRestApiOutput } from "../types/UpdateRestApiOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateRestApiInput";
export * from "../types/UpdateRestApiOutput";
export * from "../types/UpdateRestApiExceptionsUnion";

export class UpdateRestApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRestApiInput,
      OutputTypesUnion,
      UpdateRestApiOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateRestApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRestApiInput,
    UpdateRestApiOutput,
    Blob
  >();

  constructor(readonly input: UpdateRestApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateRestApiInput, UpdateRestApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRestApiInput, UpdateRestApiOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
