import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSigningPlatform } from "../model/operations/GetSigningPlatform";
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
      Blob
    > {
  readonly model = GetSigningPlatform;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSigningPlatformInput,
    GetSigningPlatformOutput,
    Blob
  >();

  constructor(readonly input: GetSigningPlatformInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
