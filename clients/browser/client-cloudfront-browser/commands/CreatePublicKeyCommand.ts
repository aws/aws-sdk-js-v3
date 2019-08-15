import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePublicKey } from "../model/operations/CreatePublicKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePublicKeyInput } from "../types/CreatePublicKeyInput";
import { CreatePublicKeyOutput } from "../types/CreatePublicKeyOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreatePublicKeyInput";
export * from "../types/CreatePublicKeyOutput";
export * from "../types/CreatePublicKeyExceptionsUnion";

export class CreatePublicKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePublicKeyInput,
      OutputTypesUnion,
      CreatePublicKeyOutput,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = CreatePublicKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePublicKeyInput,
    CreatePublicKeyOutput,
    Blob
  >();

  constructor(readonly input: CreatePublicKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<CreatePublicKeyInput, CreatePublicKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePublicKeyInput, CreatePublicKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
