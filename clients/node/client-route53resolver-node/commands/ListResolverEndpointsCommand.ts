import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListResolverEndpoints } from "../model/operations/ListResolverEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResolverEndpointsInput } from "../types/ListResolverEndpointsInput";
import { ListResolverEndpointsOutput } from "../types/ListResolverEndpointsOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/ListResolverEndpointsInput";
export * from "../types/ListResolverEndpointsOutput";
export * from "../types/ListResolverEndpointsExceptionsUnion";

export class ListResolverEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResolverEndpointsInput,
      OutputTypesUnion,
      ListResolverEndpointsOutput,
      Route53ResolverResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListResolverEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResolverEndpointsInput,
    ListResolverEndpointsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListResolverEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResolverEndpointsInput,
    ListResolverEndpointsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListResolverEndpointsInput, ListResolverEndpointsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
