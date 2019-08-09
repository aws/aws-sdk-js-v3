import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDevEndpoints } from "../model/ListDevEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDevEndpointsInput } from "../types/ListDevEndpointsInput";
import { ListDevEndpointsOutput } from "../types/ListDevEndpointsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/ListDevEndpointsInput";
export * from "../types/ListDevEndpointsOutput";
export * from "../types/ListDevEndpointsExceptionsUnion";

export class ListDevEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDevEndpointsInput,
      OutputTypesUnion,
      ListDevEndpointsOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = ListDevEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDevEndpointsInput,
    ListDevEndpointsOutput,
    Blob
  >();

  constructor(readonly input: ListDevEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDevEndpointsInput, ListDevEndpointsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDevEndpointsInput, ListDevEndpointsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
