import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetFieldLevelEncryptionProfile2019_03_26 } from "../model/GetFieldLevelEncryptionProfile2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFieldLevelEncryptionProfile2019_03_26Input } from "../types/GetFieldLevelEncryptionProfile2019_03_26Input";
import { GetFieldLevelEncryptionProfile2019_03_26Output } from "../types/GetFieldLevelEncryptionProfile2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetFieldLevelEncryptionProfile2019_03_26Input";
export * from "../types/GetFieldLevelEncryptionProfile2019_03_26Output";
export * from "../types/GetFieldLevelEncryptionProfile2019_03_26ExceptionsUnion";

export class GetFieldLevelEncryptionProfile2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFieldLevelEncryptionProfile2019_03_26Input,
      OutputTypesUnion,
      GetFieldLevelEncryptionProfile2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetFieldLevelEncryptionProfile2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFieldLevelEncryptionProfile2019_03_26Input,
    GetFieldLevelEncryptionProfile2019_03_26Output,
    Uint8Array
  >();

  constructor(readonly input: GetFieldLevelEncryptionProfile2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetFieldLevelEncryptionProfile2019_03_26Input,
    GetFieldLevelEncryptionProfile2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetFieldLevelEncryptionProfile2019_03_26Input,
        GetFieldLevelEncryptionProfile2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
