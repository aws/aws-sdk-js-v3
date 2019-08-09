import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = CreatePublicKey2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePublicKey2019_03_26Input,
    CreatePublicKey2019_03_26Output,
    _stream.Readable
  >();

  constructor(readonly input: CreatePublicKey2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
