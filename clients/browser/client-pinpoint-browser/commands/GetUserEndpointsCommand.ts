import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUserEndpoints } from "../model/GetUserEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUserEndpointsInput } from "../types/GetUserEndpointsInput";
import { GetUserEndpointsOutput } from "../types/GetUserEndpointsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetUserEndpointsInput";
export * from "../types/GetUserEndpointsOutput";
export * from "../types/GetUserEndpointsExceptionsUnion";

export class GetUserEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUserEndpointsInput,
      OutputTypesUnion,
      GetUserEndpointsOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = GetUserEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUserEndpointsInput,
    GetUserEndpointsOutput,
    Blob
  >();

  constructor(readonly input: GetUserEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetUserEndpointsInput, GetUserEndpointsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUserEndpointsInput, GetUserEndpointsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
