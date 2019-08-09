import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateOriginEndpoint } from "../model/UpdateOriginEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateOriginEndpointInput } from "../types/UpdateOriginEndpointInput";
import { UpdateOriginEndpointOutput } from "../types/UpdateOriginEndpointOutput";
import { MediaPackageResolvedConfiguration } from "../MediaPackageConfiguration";
export * from "../types/UpdateOriginEndpointInput";
export * from "../types/UpdateOriginEndpointOutput";
export * from "../types/UpdateOriginEndpointExceptionsUnion";

export class UpdateOriginEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateOriginEndpointInput,
      OutputTypesUnion,
      UpdateOriginEndpointOutput,
      MediaPackageResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateOriginEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateOriginEndpointInput,
    UpdateOriginEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateOriginEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaPackageResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateOriginEndpointInput,
    UpdateOriginEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateOriginEndpointInput, UpdateOriginEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
