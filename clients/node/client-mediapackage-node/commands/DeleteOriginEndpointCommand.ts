import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteOriginEndpoint } from "../model/operations/DeleteOriginEndpoint";
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
      _stream.Readable
    > {
  readonly model = DeleteOriginEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteOriginEndpointInput,
    DeleteOriginEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteOriginEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
