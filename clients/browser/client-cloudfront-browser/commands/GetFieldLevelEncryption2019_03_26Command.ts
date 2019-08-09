import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetFieldLevelEncryption2019_03_26 } from "../model/GetFieldLevelEncryption2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFieldLevelEncryption2019_03_26Input } from "../types/GetFieldLevelEncryption2019_03_26Input";
import { GetFieldLevelEncryption2019_03_26Output } from "../types/GetFieldLevelEncryption2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetFieldLevelEncryption2019_03_26Input";
export * from "../types/GetFieldLevelEncryption2019_03_26Output";
export * from "../types/GetFieldLevelEncryption2019_03_26ExceptionsUnion";

export class GetFieldLevelEncryption2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFieldLevelEncryption2019_03_26Input,
      OutputTypesUnion,
      GetFieldLevelEncryption2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = GetFieldLevelEncryption2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFieldLevelEncryption2019_03_26Input,
    GetFieldLevelEncryption2019_03_26Output,
    Blob
  >();

  constructor(readonly input: GetFieldLevelEncryption2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetFieldLevelEncryption2019_03_26Input,
    GetFieldLevelEncryption2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetFieldLevelEncryption2019_03_26Input,
        GetFieldLevelEncryption2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
