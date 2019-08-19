import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetFieldLevelEncryption } from "../model/operations/GetFieldLevelEncryption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFieldLevelEncryptionInput } from "../types/GetFieldLevelEncryptionInput";
import { GetFieldLevelEncryptionOutput } from "../types/GetFieldLevelEncryptionOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetFieldLevelEncryptionInput";
export * from "../types/GetFieldLevelEncryptionOutput";
export * from "../types/GetFieldLevelEncryptionExceptionsUnion";

export class GetFieldLevelEncryptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFieldLevelEncryptionInput,
      OutputTypesUnion,
      GetFieldLevelEncryptionOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetFieldLevelEncryption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFieldLevelEncryptionInput,
    GetFieldLevelEncryptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetFieldLevelEncryptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetFieldLevelEncryptionInput,
    GetFieldLevelEncryptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFieldLevelEncryptionInput, GetFieldLevelEncryptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
