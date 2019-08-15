import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRouteResponses } from "../model/operations/GetRouteResponses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRouteResponsesInput } from "../types/GetRouteResponsesInput";
import { GetRouteResponsesOutput } from "../types/GetRouteResponsesOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/GetRouteResponsesInput";
export * from "../types/GetRouteResponsesOutput";
export * from "../types/GetRouteResponsesExceptionsUnion";

export class GetRouteResponsesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRouteResponsesInput,
      OutputTypesUnion,
      GetRouteResponsesOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRouteResponses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRouteResponsesInput,
    GetRouteResponsesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRouteResponsesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRouteResponsesInput, GetRouteResponsesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRouteResponsesInput, GetRouteResponsesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
