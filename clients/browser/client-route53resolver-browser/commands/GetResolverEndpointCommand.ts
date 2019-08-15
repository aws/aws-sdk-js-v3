import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResolverEndpoint } from "../model/operations/GetResolverEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResolverEndpointInput } from "../types/GetResolverEndpointInput";
import { GetResolverEndpointOutput } from "../types/GetResolverEndpointOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/GetResolverEndpointInput";
export * from "../types/GetResolverEndpointOutput";
export * from "../types/GetResolverEndpointExceptionsUnion";

export class GetResolverEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResolverEndpointInput,
      OutputTypesUnion,
      GetResolverEndpointOutput,
      Route53ResolverResolvedConfiguration,
      Blob
    > {
  readonly model = GetResolverEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResolverEndpointInput,
    GetResolverEndpointOutput,
    Blob
  >();

  constructor(readonly input: GetResolverEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetResolverEndpointInput,
    GetResolverEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResolverEndpointInput, GetResolverEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
