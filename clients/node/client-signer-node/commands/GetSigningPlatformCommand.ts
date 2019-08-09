import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSigningPlatform } from "../model/GetSigningPlatform";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSigningPlatformInput } from "../types/GetSigningPlatformInput";
import { GetSigningPlatformOutput } from "../types/GetSigningPlatformOutput";
import { signerResolvedConfiguration } from "../signerConfiguration";
export * from "../types/GetSigningPlatformInput";
export * from "../types/GetSigningPlatformOutput";
export * from "../types/GetSigningPlatformExceptionsUnion";

export class GetSigningPlatformCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSigningPlatformInput,
      OutputTypesUnion,
      GetSigningPlatformOutput,
      signerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSigningPlatform;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSigningPlatformInput,
    GetSigningPlatformOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSigningPlatformInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: signerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSigningPlatformInput,
    GetSigningPlatformOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSigningPlatformInput, GetSigningPlatformOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
