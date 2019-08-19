import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteFieldLevelEncryptionConfig } from "../model/operations/DeleteFieldLevelEncryptionConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFieldLevelEncryptionConfigInput } from "../types/DeleteFieldLevelEncryptionConfigInput";
import { DeleteFieldLevelEncryptionConfigOutput } from "../types/DeleteFieldLevelEncryptionConfigOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/DeleteFieldLevelEncryptionConfigInput";
export * from "../types/DeleteFieldLevelEncryptionConfigOutput";
export * from "../types/DeleteFieldLevelEncryptionConfigExceptionsUnion";

export class DeleteFieldLevelEncryptionConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFieldLevelEncryptionConfigInput,
      OutputTypesUnion,
      DeleteFieldLevelEncryptionConfigOutput,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteFieldLevelEncryptionConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFieldLevelEncryptionConfigInput,
    DeleteFieldLevelEncryptionConfigOutput,
    Blob
  >();

  constructor(readonly input: DeleteFieldLevelEncryptionConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteFieldLevelEncryptionConfigInput,
    DeleteFieldLevelEncryptionConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteFieldLevelEncryptionConfigInput,
        DeleteFieldLevelEncryptionConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
