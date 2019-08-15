import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPublicKey } from "../model/operations/GetPublicKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPublicKeyInput } from "../types/GetPublicKeyInput";
import { GetPublicKeyOutput } from "../types/GetPublicKeyOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetPublicKeyInput";
export * from "../types/GetPublicKeyOutput";
export * from "../types/GetPublicKeyExceptionsUnion";

export class GetPublicKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPublicKeyInput,
      OutputTypesUnion,
      GetPublicKeyOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPublicKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPublicKeyInput,
    GetPublicKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPublicKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPublicKeyInput, GetPublicKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPublicKeyInput, GetPublicKeyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
