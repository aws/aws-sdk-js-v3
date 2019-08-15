import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetFieldLevelEncryptionProfile } from "../model/operations/GetFieldLevelEncryptionProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFieldLevelEncryptionProfileInput } from "../types/GetFieldLevelEncryptionProfileInput";
import { GetFieldLevelEncryptionProfileOutput } from "../types/GetFieldLevelEncryptionProfileOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetFieldLevelEncryptionProfileInput";
export * from "../types/GetFieldLevelEncryptionProfileOutput";
export * from "../types/GetFieldLevelEncryptionProfileExceptionsUnion";

export class GetFieldLevelEncryptionProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFieldLevelEncryptionProfileInput,
      OutputTypesUnion,
      GetFieldLevelEncryptionProfileOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetFieldLevelEncryptionProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFieldLevelEncryptionProfileInput,
    GetFieldLevelEncryptionProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetFieldLevelEncryptionProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetFieldLevelEncryptionProfileInput,
    GetFieldLevelEncryptionProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetFieldLevelEncryptionProfileInput,
        GetFieldLevelEncryptionProfileOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
