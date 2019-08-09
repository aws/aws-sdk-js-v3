import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CopyImage } from "../model/CopyImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyImageInput } from "../types/CopyImageInput";
import { CopyImageOutput } from "../types/CopyImageOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CopyImageInput";
export * from "../types/CopyImageOutput";
export * from "../types/CopyImageExceptionsUnion";

export class CopyImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyImageInput,
      OutputTypesUnion,
      CopyImageOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CopyImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyImageInput,
    CopyImageOutput,
    _stream.Readable
  >();

  constructor(readonly input: CopyImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CopyImageInput, CopyImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CopyImageInput, CopyImageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
