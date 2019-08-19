import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFieldLevelEncryptionConfig } from "../model/operations/UpdateFieldLevelEncryptionConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFieldLevelEncryptionConfigInput } from "../types/UpdateFieldLevelEncryptionConfigInput";
import { UpdateFieldLevelEncryptionConfigOutput } from "../types/UpdateFieldLevelEncryptionConfigOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/UpdateFieldLevelEncryptionConfigInput";
export * from "../types/UpdateFieldLevelEncryptionConfigOutput";
export * from "../types/UpdateFieldLevelEncryptionConfigExceptionsUnion";

export class UpdateFieldLevelEncryptionConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFieldLevelEncryptionConfigInput,
      OutputTypesUnion,
      UpdateFieldLevelEncryptionConfigOutput,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateFieldLevelEncryptionConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFieldLevelEncryptionConfigInput,
    UpdateFieldLevelEncryptionConfigOutput,
    Blob
  >();

  constructor(readonly input: UpdateFieldLevelEncryptionConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFieldLevelEncryptionConfigInput,
    UpdateFieldLevelEncryptionConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateFieldLevelEncryptionConfigInput,
        UpdateFieldLevelEncryptionConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
