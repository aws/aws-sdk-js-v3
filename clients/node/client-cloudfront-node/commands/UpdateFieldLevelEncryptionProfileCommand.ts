import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = UpdateFieldLevelEncryptionProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFieldLevelEncryptionProfileInput,
    UpdateFieldLevelEncryptionProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateFieldLevelEncryptionProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
