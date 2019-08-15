import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterImage } from "../model/operations/DeregisterImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterImageInput } from "../types/DeregisterImageInput";
import { DeregisterImageOutput } from "../types/DeregisterImageOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeregisterImageInput";
export * from "../types/DeregisterImageOutput";
export * from "../types/DeregisterImageExceptionsUnion";

export class DeregisterImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterImageInput,
      OutputTypesUnion,
      DeregisterImageOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterImageInput,
    DeregisterImageOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeregisterImageInput, DeregisterImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterImageInput, DeregisterImageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
