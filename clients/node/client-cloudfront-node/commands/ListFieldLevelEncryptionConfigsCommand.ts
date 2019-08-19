import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListFieldLevelEncryptionConfigs } from "../model/operations/ListFieldLevelEncryptionConfigs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFieldLevelEncryptionConfigsInput } from "../types/ListFieldLevelEncryptionConfigsInput";
import { ListFieldLevelEncryptionConfigsOutput } from "../types/ListFieldLevelEncryptionConfigsOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListFieldLevelEncryptionConfigsInput";
export * from "../types/ListFieldLevelEncryptionConfigsOutput";
export * from "../types/ListFieldLevelEncryptionConfigsExceptionsUnion";

export class ListFieldLevelEncryptionConfigsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFieldLevelEncryptionConfigsInput,
      OutputTypesUnion,
      ListFieldLevelEncryptionConfigsOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListFieldLevelEncryptionConfigs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFieldLevelEncryptionConfigsInput,
    ListFieldLevelEncryptionConfigsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListFieldLevelEncryptionConfigsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListFieldLevelEncryptionConfigsInput,
    ListFieldLevelEncryptionConfigsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListFieldLevelEncryptionConfigsInput,
        ListFieldLevelEncryptionConfigsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
