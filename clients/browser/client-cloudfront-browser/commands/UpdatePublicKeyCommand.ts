import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdatePublicKey } from "../model/operations/UpdatePublicKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePublicKeyInput } from "../types/UpdatePublicKeyInput";
import { UpdatePublicKeyOutput } from "../types/UpdatePublicKeyOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/UpdatePublicKeyInput";
export * from "../types/UpdatePublicKeyOutput";
export * from "../types/UpdatePublicKeyExceptionsUnion";

export class UpdatePublicKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePublicKeyInput,
      OutputTypesUnion,
      UpdatePublicKeyOutput,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = UpdatePublicKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePublicKeyInput,
    UpdatePublicKeyOutput,
    Blob
  >();

  constructor(readonly input: UpdatePublicKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdatePublicKeyInput, UpdatePublicKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePublicKeyInput, UpdatePublicKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
