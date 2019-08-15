import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFieldLevelEncryptionProfile } from "../model/operations/UpdateFieldLevelEncryptionProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFieldLevelEncryptionProfileInput } from "../types/UpdateFieldLevelEncryptionProfileInput";
import { UpdateFieldLevelEncryptionProfileOutput } from "../types/UpdateFieldLevelEncryptionProfileOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/UpdateFieldLevelEncryptionProfileInput";
export * from "../types/UpdateFieldLevelEncryptionProfileOutput";
export * from "../types/UpdateFieldLevelEncryptionProfileExceptionsUnion";

export class UpdateFieldLevelEncryptionProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFieldLevelEncryptionProfileInput,
      OutputTypesUnion,
      UpdateFieldLevelEncryptionProfileOutput,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateFieldLevelEncryptionProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFieldLevelEncryptionProfileInput,
    UpdateFieldLevelEncryptionProfileOutput,
    Blob
  >();

  constructor(readonly input: UpdateFieldLevelEncryptionProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFieldLevelEncryptionProfileInput,
    UpdateFieldLevelEncryptionProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateFieldLevelEncryptionProfileInput,
        UpdateFieldLevelEncryptionProfileOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
