import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEndpoints } from "../model/ListEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEndpointsInput } from "../types/ListEndpointsInput";
import { ListEndpointsOutput } from "../types/ListEndpointsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListEndpointsInput";
export * from "../types/ListEndpointsOutput";
export * from "../types/ListEndpointsExceptionsUnion";

export class ListEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEndpointsInput,
      OutputTypesUnion,
      ListEndpointsOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEndpointsInput,
    ListEndpointsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<ListEndpointsInput, ListEndpointsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEndpointsInput, ListEndpointsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
