import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListEndpoints } from "../model/operations/ListEndpoints";
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
      _stream.Readable
    > {
  readonly model = ListEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEndpointsInput,
    ListEndpointsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
