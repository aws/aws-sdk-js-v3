import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CopyFpgaImage } from "../model/CopyFpgaImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyFpgaImageInput } from "../types/CopyFpgaImageInput";
import { CopyFpgaImageOutput } from "../types/CopyFpgaImageOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CopyFpgaImageInput";
export * from "../types/CopyFpgaImageOutput";
export * from "../types/CopyFpgaImageExceptionsUnion";

export class CopyFpgaImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyFpgaImageInput,
      OutputTypesUnion,
      CopyFpgaImageOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CopyFpgaImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyFpgaImageInput,
    CopyFpgaImageOutput,
    _stream.Readable
  >();

  constructor(readonly input: CopyFpgaImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CopyFpgaImageInput, CopyFpgaImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CopyFpgaImageInput, CopyFpgaImageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
