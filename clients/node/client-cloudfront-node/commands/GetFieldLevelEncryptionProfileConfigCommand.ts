import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetFieldLevelEncryptionProfileConfig } from "../model/operations/GetFieldLevelEncryptionProfileConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFieldLevelEncryptionProfileConfigInput } from "../types/GetFieldLevelEncryptionProfileConfigInput";
import { GetFieldLevelEncryptionProfileConfigOutput } from "../types/GetFieldLevelEncryptionProfileConfigOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetFieldLevelEncryptionProfileConfigInput";
export * from "../types/GetFieldLevelEncryptionProfileConfigOutput";
export * from "../types/GetFieldLevelEncryptionProfileConfigExceptionsUnion";

export class GetFieldLevelEncryptionProfileConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFieldLevelEncryptionProfileConfigInput,
      OutputTypesUnion,
      GetFieldLevelEncryptionProfileConfigOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetFieldLevelEncryptionProfileConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFieldLevelEncryptionProfileConfigInput,
    GetFieldLevelEncryptionProfileConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetFieldLevelEncryptionProfileConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetFieldLevelEncryptionProfileConfigInput,
    GetFieldLevelEncryptionProfileConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetFieldLevelEncryptionProfileConfigInput,
        GetFieldLevelEncryptionProfileConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
