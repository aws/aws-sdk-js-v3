import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetFieldLevelEncryptionConfig } from "../model/operations/GetFieldLevelEncryptionConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFieldLevelEncryptionConfigInput } from "../types/GetFieldLevelEncryptionConfigInput";
import { GetFieldLevelEncryptionConfigOutput } from "../types/GetFieldLevelEncryptionConfigOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetFieldLevelEncryptionConfigInput";
export * from "../types/GetFieldLevelEncryptionConfigOutput";
export * from "../types/GetFieldLevelEncryptionConfigExceptionsUnion";

export class GetFieldLevelEncryptionConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFieldLevelEncryptionConfigInput,
      OutputTypesUnion,
      GetFieldLevelEncryptionConfigOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetFieldLevelEncryptionConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFieldLevelEncryptionConfigInput,
    GetFieldLevelEncryptionConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetFieldLevelEncryptionConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetFieldLevelEncryptionConfigInput,
    GetFieldLevelEncryptionConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetFieldLevelEncryptionConfigInput,
        GetFieldLevelEncryptionConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
