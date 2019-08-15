import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPublicKeyConfig } from "../model/operations/GetPublicKeyConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPublicKeyConfigInput } from "../types/GetPublicKeyConfigInput";
import { GetPublicKeyConfigOutput } from "../types/GetPublicKeyConfigOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetPublicKeyConfigInput";
export * from "../types/GetPublicKeyConfigOutput";
export * from "../types/GetPublicKeyConfigExceptionsUnion";

export class GetPublicKeyConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPublicKeyConfigInput,
      OutputTypesUnion,
      GetPublicKeyConfigOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPublicKeyConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPublicKeyConfigInput,
    GetPublicKeyConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPublicKeyConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPublicKeyConfigInput,
    GetPublicKeyConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPublicKeyConfigInput, GetPublicKeyConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
