import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDevEndpoint } from "../model/operations/UpdateDevEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDevEndpointInput } from "../types/UpdateDevEndpointInput";
import { UpdateDevEndpointOutput } from "../types/UpdateDevEndpointOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/UpdateDevEndpointInput";
export * from "../types/UpdateDevEndpointOutput";
export * from "../types/UpdateDevEndpointExceptionsUnion";

export class UpdateDevEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDevEndpointInput,
      OutputTypesUnion,
      UpdateDevEndpointOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDevEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDevEndpointInput,
    UpdateDevEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDevEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDevEndpointInput, UpdateDevEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDevEndpointInput, UpdateDevEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
