import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListOriginEndpoints } from "../model/ListOriginEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOriginEndpointsInput } from "../types/ListOriginEndpointsInput";
import { ListOriginEndpointsOutput } from "../types/ListOriginEndpointsOutput";
import { MediaPackageResolvedConfiguration } from "../MediaPackageConfiguration";
export * from "../types/ListOriginEndpointsInput";
export * from "../types/ListOriginEndpointsOutput";
export * from "../types/ListOriginEndpointsExceptionsUnion";

export class ListOriginEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOriginEndpointsInput,
      OutputTypesUnion,
      ListOriginEndpointsOutput,
      MediaPackageResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListOriginEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOriginEndpointsInput,
    ListOriginEndpointsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListOriginEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaPackageResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListOriginEndpointsInput,
    ListOriginEndpointsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListOriginEndpointsInput, ListOriginEndpointsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
