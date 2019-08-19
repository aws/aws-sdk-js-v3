import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRouteResponse } from "../model/operations/DeleteRouteResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRouteResponseInput } from "../types/DeleteRouteResponseInput";
import { DeleteRouteResponseOutput } from "../types/DeleteRouteResponseOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/DeleteRouteResponseInput";
export * from "../types/DeleteRouteResponseOutput";
export * from "../types/DeleteRouteResponseExceptionsUnion";

export class DeleteRouteResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRouteResponseInput,
      OutputTypesUnion,
      DeleteRouteResponseOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRouteResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRouteResponseInput,
    DeleteRouteResponseOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRouteResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRouteResponseInput,
    DeleteRouteResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRouteResponseInput, DeleteRouteResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
