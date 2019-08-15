import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListFieldLevelEncryptionProfiles } from "../model/operations/ListFieldLevelEncryptionProfiles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFieldLevelEncryptionProfilesInput } from "../types/ListFieldLevelEncryptionProfilesInput";
import { ListFieldLevelEncryptionProfilesOutput } from "../types/ListFieldLevelEncryptionProfilesOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListFieldLevelEncryptionProfilesInput";
export * from "../types/ListFieldLevelEncryptionProfilesOutput";
export * from "../types/ListFieldLevelEncryptionProfilesExceptionsUnion";

export class ListFieldLevelEncryptionProfilesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFieldLevelEncryptionProfilesInput,
      OutputTypesUnion,
      ListFieldLevelEncryptionProfilesOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListFieldLevelEncryptionProfiles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFieldLevelEncryptionProfilesInput,
    ListFieldLevelEncryptionProfilesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListFieldLevelEncryptionProfilesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListFieldLevelEncryptionProfilesInput,
    ListFieldLevelEncryptionProfilesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListFieldLevelEncryptionProfilesInput,
        ListFieldLevelEncryptionProfilesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
