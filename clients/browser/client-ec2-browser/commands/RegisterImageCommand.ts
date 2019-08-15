import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterImage } from "../model/operations/RegisterImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterImageInput } from "../types/RegisterImageInput";
import { RegisterImageOutput } from "../types/RegisterImageOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RegisterImageInput";
export * from "../types/RegisterImageOutput";
export * from "../types/RegisterImageExceptionsUnion";

export class RegisterImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterImageInput,
      OutputTypesUnion,
      RegisterImageOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterImageInput,
    RegisterImageOutput,
    Blob
  >();

  constructor(readonly input: RegisterImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterImageInput, RegisterImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterImageInput, RegisterImageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
