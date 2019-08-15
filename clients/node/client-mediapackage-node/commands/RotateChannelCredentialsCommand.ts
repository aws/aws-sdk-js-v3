import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RotateChannelCredentials } from "../model/operations/RotateChannelCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RotateChannelCredentialsInput } from "../types/RotateChannelCredentialsInput";
import { RotateChannelCredentialsOutput } from "../types/RotateChannelCredentialsOutput";
import { MediaPackageResolvedConfiguration } from "../MediaPackageConfiguration";
export * from "../types/RotateChannelCredentialsInput";
export * from "../types/RotateChannelCredentialsOutput";
export * from "../types/RotateChannelCredentialsExceptionsUnion";

export class RotateChannelCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RotateChannelCredentialsInput,
      OutputTypesUnion,
      RotateChannelCredentialsOutput,
      MediaPackageResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RotateChannelCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RotateChannelCredentialsInput,
    RotateChannelCredentialsOutput,
    _stream.Readable
  >();

  constructor(readonly input: RotateChannelCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaPackageResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RotateChannelCredentialsInput,
    RotateChannelCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RotateChannelCredentialsInput, RotateChannelCredentialsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
