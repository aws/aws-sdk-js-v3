import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFpgaImage } from "../model/operations/CreateFpgaImage";
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
      Blob
    > {
  readonly model = CreateFpgaImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFpgaImageInput,
    CreateFpgaImageOutput,
    Blob
  >();

  constructor(readonly input: CreateFpgaImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
