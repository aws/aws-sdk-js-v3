import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateFpgaImage } from "../model/CreateFpgaImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFpgaImageInput } from "../types/CreateFpgaImageInput";
import { CreateFpgaImageOutput } from "../types/CreateFpgaImageOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateFpgaImageInput";
export * from "../types/CreateFpgaImageOutput";
export * from "../types/CreateFpgaImageExceptionsUnion";

export class CreateFpgaImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFpgaImageInput,
      OutputTypesUnion,
      CreateFpgaImageOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateFpgaImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFpgaImageInput,
    CreateFpgaImageOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateFpgaImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateFpgaImageInput, CreateFpgaImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateFpgaImageInput, CreateFpgaImageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
