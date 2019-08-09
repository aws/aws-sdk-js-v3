import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDevEndpoint } from "../model/CreateDevEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDevEndpointInput } from "../types/CreateDevEndpointInput";
import { CreateDevEndpointOutput } from "../types/CreateDevEndpointOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/CreateDevEndpointInput";
export * from "../types/CreateDevEndpointOutput";
export * from "../types/CreateDevEndpointExceptionsUnion";

export class CreateDevEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDevEndpointInput,
      OutputTypesUnion,
      CreateDevEndpointOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDevEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDevEndpointInput,
    CreateDevEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDevEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDevEndpointInput, CreateDevEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDevEndpointInput, CreateDevEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
