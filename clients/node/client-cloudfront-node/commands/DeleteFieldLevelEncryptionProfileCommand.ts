import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteFieldLevelEncryptionProfile } from "../model/operations/DeleteFieldLevelEncryptionProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFieldLevelEncryptionProfileInput } from "../types/DeleteFieldLevelEncryptionProfileInput";
import { DeleteFieldLevelEncryptionProfileOutput } from "../types/DeleteFieldLevelEncryptionProfileOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/DeleteFieldLevelEncryptionProfileInput";
export * from "../types/DeleteFieldLevelEncryptionProfileOutput";
export * from "../types/DeleteFieldLevelEncryptionProfileExceptionsUnion";

export class DeleteFieldLevelEncryptionProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFieldLevelEncryptionProfileInput,
      OutputTypesUnion,
      DeleteFieldLevelEncryptionProfileOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteFieldLevelEncryptionProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFieldLevelEncryptionProfileInput,
    DeleteFieldLevelEncryptionProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteFieldLevelEncryptionProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteFieldLevelEncryptionProfileInput,
    DeleteFieldLevelEncryptionProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteFieldLevelEncryptionProfileInput,
        DeleteFieldLevelEncryptionProfileOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
