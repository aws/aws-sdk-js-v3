import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAccessKey } from "../model/CreateAccessKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAccessKeyInput } from "../types/CreateAccessKeyInput";
import { CreateAccessKeyOutput } from "../types/CreateAccessKeyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/CreateAccessKeyInput";
export * from "../types/CreateAccessKeyOutput";
export * from "../types/CreateAccessKeyExceptionsUnion";

export class CreateAccessKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAccessKeyInput,
      OutputTypesUnion,
      CreateAccessKeyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = CreateAccessKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAccessKeyInput,
    CreateAccessKeyOutput,
    Blob
  >();

  constructor(readonly input: CreateAccessKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateAccessKeyInput, CreateAccessKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAccessKeyInput, CreateAccessKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
