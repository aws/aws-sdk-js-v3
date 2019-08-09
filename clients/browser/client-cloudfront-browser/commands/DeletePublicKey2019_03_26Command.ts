import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeletePublicKey2019_03_26 } from "../model/DeletePublicKey2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePublicKey2019_03_26Input } from "../types/DeletePublicKey2019_03_26Input";
import { DeletePublicKey2019_03_26Output } from "../types/DeletePublicKey2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/DeletePublicKey2019_03_26Input";
export * from "../types/DeletePublicKey2019_03_26Output";
export * from "../types/DeletePublicKey2019_03_26ExceptionsUnion";

export class DeletePublicKey2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePublicKey2019_03_26Input,
      OutputTypesUnion,
      DeletePublicKey2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = DeletePublicKey2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePublicKey2019_03_26Input,
    DeletePublicKey2019_03_26Output,
    Blob
  >();

  constructor(readonly input: DeletePublicKey2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePublicKey2019_03_26Input,
    DeletePublicKey2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePublicKey2019_03_26Input, DeletePublicKey2019_03_26Output>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
