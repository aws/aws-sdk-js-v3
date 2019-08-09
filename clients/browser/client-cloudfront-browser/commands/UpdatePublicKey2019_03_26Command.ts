import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdatePublicKey2019_03_26 } from "../model/UpdatePublicKey2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePublicKey2019_03_26Input } from "../types/UpdatePublicKey2019_03_26Input";
import { UpdatePublicKey2019_03_26Output } from "../types/UpdatePublicKey2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/UpdatePublicKey2019_03_26Input";
export * from "../types/UpdatePublicKey2019_03_26Output";
export * from "../types/UpdatePublicKey2019_03_26ExceptionsUnion";

export class UpdatePublicKey2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePublicKey2019_03_26Input,
      OutputTypesUnion,
      UpdatePublicKey2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = UpdatePublicKey2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePublicKey2019_03_26Input,
    UpdatePublicKey2019_03_26Output,
    Blob
  >();

  constructor(readonly input: UpdatePublicKey2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdatePublicKey2019_03_26Input,
    UpdatePublicKey2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePublicKey2019_03_26Input, UpdatePublicKey2019_03_26Output>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
