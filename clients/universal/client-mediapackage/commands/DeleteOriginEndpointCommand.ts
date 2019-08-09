import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteOriginEndpoint } from "../model/DeleteOriginEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteOriginEndpointInput } from "../types/DeleteOriginEndpointInput";
import { DeleteOriginEndpointOutput } from "../types/DeleteOriginEndpointOutput";
import { MediaPackageResolvedConfiguration } from "../MediaPackageConfiguration";
export * from "../types/DeleteOriginEndpointInput";
export * from "../types/DeleteOriginEndpointOutput";
export * from "../types/DeleteOriginEndpointExceptionsUnion";

export class DeleteOriginEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteOriginEndpointInput,
      OutputTypesUnion,
      DeleteOriginEndpointOutput,
      MediaPackageResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteOriginEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteOriginEndpointInput,
    DeleteOriginEndpointOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteOriginEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaPackageResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteOriginEndpointInput,
    DeleteOriginEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteOriginEndpointInput, DeleteOriginEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
