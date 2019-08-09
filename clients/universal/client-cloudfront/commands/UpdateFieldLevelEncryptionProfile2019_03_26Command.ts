import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFieldLevelEncryptionProfile2019_03_26 } from "../model/UpdateFieldLevelEncryptionProfile2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFieldLevelEncryptionProfile2019_03_26Input } from "../types/UpdateFieldLevelEncryptionProfile2019_03_26Input";
import { UpdateFieldLevelEncryptionProfile2019_03_26Output } from "../types/UpdateFieldLevelEncryptionProfile2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/UpdateFieldLevelEncryptionProfile2019_03_26Input";
export * from "../types/UpdateFieldLevelEncryptionProfile2019_03_26Output";
export * from "../types/UpdateFieldLevelEncryptionProfile2019_03_26ExceptionsUnion";

export class UpdateFieldLevelEncryptionProfile2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFieldLevelEncryptionProfile2019_03_26Input,
      OutputTypesUnion,
      UpdateFieldLevelEncryptionProfile2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateFieldLevelEncryptionProfile2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFieldLevelEncryptionProfile2019_03_26Input,
    UpdateFieldLevelEncryptionProfile2019_03_26Output,
    Uint8Array
  >();

  constructor(
    readonly input: UpdateFieldLevelEncryptionProfile2019_03_26Input
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFieldLevelEncryptionProfile2019_03_26Input,
    UpdateFieldLevelEncryptionProfile2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateFieldLevelEncryptionProfile2019_03_26Input,
        UpdateFieldLevelEncryptionProfile2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
