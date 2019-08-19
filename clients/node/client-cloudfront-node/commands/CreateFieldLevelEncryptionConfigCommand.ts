import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateFieldLevelEncryptionConfig } from "../model/operations/CreateFieldLevelEncryptionConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFieldLevelEncryptionConfigInput } from "../types/CreateFieldLevelEncryptionConfigInput";
import { CreateFieldLevelEncryptionConfigOutput } from "../types/CreateFieldLevelEncryptionConfigOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateFieldLevelEncryptionConfigInput";
export * from "../types/CreateFieldLevelEncryptionConfigOutput";
export * from "../types/CreateFieldLevelEncryptionConfigExceptionsUnion";

export class CreateFieldLevelEncryptionConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFieldLevelEncryptionConfigInput,
      OutputTypesUnion,
      CreateFieldLevelEncryptionConfigOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateFieldLevelEncryptionConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFieldLevelEncryptionConfigInput,
    CreateFieldLevelEncryptionConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateFieldLevelEncryptionConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateFieldLevelEncryptionConfigInput,
    CreateFieldLevelEncryptionConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateFieldLevelEncryptionConfigInput,
        CreateFieldLevelEncryptionConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
