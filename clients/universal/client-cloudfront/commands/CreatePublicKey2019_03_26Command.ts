import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePublicKey2019_03_26 } from "../model/CreatePublicKey2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePublicKey2019_03_26Input } from "../types/CreatePublicKey2019_03_26Input";
import { CreatePublicKey2019_03_26Output } from "../types/CreatePublicKey2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreatePublicKey2019_03_26Input";
export * from "../types/CreatePublicKey2019_03_26Output";
export * from "../types/CreatePublicKey2019_03_26ExceptionsUnion";

export class CreatePublicKey2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePublicKey2019_03_26Input,
      OutputTypesUnion,
      CreatePublicKey2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreatePublicKey2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePublicKey2019_03_26Input,
    CreatePublicKey2019_03_26Output,
    Uint8Array
  >();

  constructor(readonly input: CreatePublicKey2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePublicKey2019_03_26Input,
    CreatePublicKey2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePublicKey2019_03_26Input, CreatePublicKey2019_03_26Output>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
