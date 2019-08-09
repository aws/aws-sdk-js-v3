import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateFieldLevelEncryptionConfig2019_03_26 } from "../model/UpdateFieldLevelEncryptionConfig2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFieldLevelEncryptionConfig2019_03_26Input } from "../types/UpdateFieldLevelEncryptionConfig2019_03_26Input";
import { UpdateFieldLevelEncryptionConfig2019_03_26Output } from "../types/UpdateFieldLevelEncryptionConfig2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/UpdateFieldLevelEncryptionConfig2019_03_26Input";
export * from "../types/UpdateFieldLevelEncryptionConfig2019_03_26Output";
export * from "../types/UpdateFieldLevelEncryptionConfig2019_03_26ExceptionsUnion";

export class UpdateFieldLevelEncryptionConfig2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFieldLevelEncryptionConfig2019_03_26Input,
      OutputTypesUnion,
      UpdateFieldLevelEncryptionConfig2019_03_26Output,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateFieldLevelEncryptionConfig2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFieldLevelEncryptionConfig2019_03_26Input,
    UpdateFieldLevelEncryptionConfig2019_03_26Output,
    _stream.Readable
  >();

  constructor(
    readonly input: UpdateFieldLevelEncryptionConfig2019_03_26Input
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFieldLevelEncryptionConfig2019_03_26Input,
    UpdateFieldLevelEncryptionConfig2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateFieldLevelEncryptionConfig2019_03_26Input,
        UpdateFieldLevelEncryptionConfig2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
