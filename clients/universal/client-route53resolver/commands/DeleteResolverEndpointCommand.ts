import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteResolverEndpoint } from "../model/DeleteResolverEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteResolverEndpointInput } from "../types/DeleteResolverEndpointInput";
import { DeleteResolverEndpointOutput } from "../types/DeleteResolverEndpointOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/DeleteResolverEndpointInput";
export * from "../types/DeleteResolverEndpointOutput";
export * from "../types/DeleteResolverEndpointExceptionsUnion";

export class DeleteResolverEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteResolverEndpointInput,
      OutputTypesUnion,
      DeleteResolverEndpointOutput,
      Route53ResolverResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteResolverEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteResolverEndpointInput,
    DeleteResolverEndpointOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteResolverEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteResolverEndpointInput,
    DeleteResolverEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteResolverEndpointInput, DeleteResolverEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
