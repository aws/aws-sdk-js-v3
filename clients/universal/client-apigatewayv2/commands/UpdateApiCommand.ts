import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateApi } from "../model/UpdateApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApiInput } from "../types/UpdateApiInput";
import { UpdateApiOutput } from "../types/UpdateApiOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/UpdateApiInput";
export * from "../types/UpdateApiOutput";
export * from "../types/UpdateApiExceptionsUnion";

export class UpdateApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApiInput,
      OutputTypesUnion,
      UpdateApiOutput,
      ApiGatewayV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApiInput,
    UpdateApiOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateApiInput, UpdateApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateApiInput, UpdateApiOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
