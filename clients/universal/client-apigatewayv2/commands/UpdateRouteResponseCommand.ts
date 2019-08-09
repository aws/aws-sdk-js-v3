import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRouteResponse } from "../model/UpdateRouteResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRouteResponseInput } from "../types/UpdateRouteResponseInput";
import { UpdateRouteResponseOutput } from "../types/UpdateRouteResponseOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/UpdateRouteResponseInput";
export * from "../types/UpdateRouteResponseOutput";
export * from "../types/UpdateRouteResponseExceptionsUnion";

export class UpdateRouteResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRouteResponseInput,
      OutputTypesUnion,
      UpdateRouteResponseOutput,
      ApiGatewayV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateRouteResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRouteResponseInput,
    UpdateRouteResponseOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateRouteResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRouteResponseInput,
    UpdateRouteResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRouteResponseInput, UpdateRouteResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
