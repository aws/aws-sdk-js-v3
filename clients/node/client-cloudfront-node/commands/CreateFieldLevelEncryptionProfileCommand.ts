import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateFieldLevelEncryptionProfile } from "../model/operations/CreateFieldLevelEncryptionProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFieldLevelEncryptionProfileInput } from "../types/CreateFieldLevelEncryptionProfileInput";
import { CreateFieldLevelEncryptionProfileOutput } from "../types/CreateFieldLevelEncryptionProfileOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateFieldLevelEncryptionProfileInput";
export * from "../types/CreateFieldLevelEncryptionProfileOutput";
export * from "../types/CreateFieldLevelEncryptionProfileExceptionsUnion";

export class CreateFieldLevelEncryptionProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFieldLevelEncryptionProfileInput,
      OutputTypesUnion,
      CreateFieldLevelEncryptionProfileOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateFieldLevelEncryptionProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFieldLevelEncryptionProfileInput,
    CreateFieldLevelEncryptionProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateFieldLevelEncryptionProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateFieldLevelEncryptionProfileInput,
    CreateFieldLevelEncryptionProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateFieldLevelEncryptionProfileInput,
        CreateFieldLevelEncryptionProfileOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
