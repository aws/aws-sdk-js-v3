import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteFpgaImage } from "../model/operations/DeleteFpgaImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFpgaImageInput } from "../types/DeleteFpgaImageInput";
import { DeleteFpgaImageOutput } from "../types/DeleteFpgaImageOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteFpgaImageInput";
export * from "../types/DeleteFpgaImageOutput";
export * from "../types/DeleteFpgaImageExceptionsUnion";

export class DeleteFpgaImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFpgaImageInput,
      OutputTypesUnion,
      DeleteFpgaImageOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteFpgaImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFpgaImageInput,
    DeleteFpgaImageOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteFpgaImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFpgaImageInput, DeleteFpgaImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFpgaImageInput, DeleteFpgaImageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
