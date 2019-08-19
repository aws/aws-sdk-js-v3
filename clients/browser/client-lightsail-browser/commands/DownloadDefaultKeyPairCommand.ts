import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DownloadDefaultKeyPair } from "../model/operations/DownloadDefaultKeyPair";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DownloadDefaultKeyPairInput } from "../types/DownloadDefaultKeyPairInput";
import { DownloadDefaultKeyPairOutput } from "../types/DownloadDefaultKeyPairOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DownloadDefaultKeyPairInput";
export * from "../types/DownloadDefaultKeyPairOutput";
export * from "../types/DownloadDefaultKeyPairExceptionsUnion";

export class DownloadDefaultKeyPairCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DownloadDefaultKeyPairInput,
      OutputTypesUnion,
      DownloadDefaultKeyPairOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = DownloadDefaultKeyPair;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DownloadDefaultKeyPairInput,
    DownloadDefaultKeyPairOutput,
    Blob
  >();

  constructor(readonly input: DownloadDefaultKeyPairInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DownloadDefaultKeyPairInput,
    DownloadDefaultKeyPairOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DownloadDefaultKeyPairInput, DownloadDefaultKeyPairOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
