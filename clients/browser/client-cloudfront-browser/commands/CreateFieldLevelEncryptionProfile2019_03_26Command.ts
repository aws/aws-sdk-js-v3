import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFieldLevelEncryptionProfile2019_03_26 } from "../model/CreateFieldLevelEncryptionProfile2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFieldLevelEncryptionProfile2019_03_26Input } from "../types/CreateFieldLevelEncryptionProfile2019_03_26Input";
import { CreateFieldLevelEncryptionProfile2019_03_26Output } from "../types/CreateFieldLevelEncryptionProfile2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateFieldLevelEncryptionProfile2019_03_26Input";
export * from "../types/CreateFieldLevelEncryptionProfile2019_03_26Output";
export * from "../types/CreateFieldLevelEncryptionProfile2019_03_26ExceptionsUnion";

export class CreateFieldLevelEncryptionProfile2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFieldLevelEncryptionProfile2019_03_26Input,
      OutputTypesUnion,
      CreateFieldLevelEncryptionProfile2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = CreateFieldLevelEncryptionProfile2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFieldLevelEncryptionProfile2019_03_26Input,
    CreateFieldLevelEncryptionProfile2019_03_26Output,
    Blob
  >();

  constructor(
    readonly input: CreateFieldLevelEncryptionProfile2019_03_26Input
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateFieldLevelEncryptionProfile2019_03_26Input,
    CreateFieldLevelEncryptionProfile2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateFieldLevelEncryptionProfile2019_03_26Input,
        CreateFieldLevelEncryptionProfile2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
