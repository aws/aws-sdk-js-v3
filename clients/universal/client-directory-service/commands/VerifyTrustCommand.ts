import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { VerifyTrust } from "../model/VerifyTrust";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { VerifyTrustInput } from "../types/VerifyTrustInput";
import { VerifyTrustOutput } from "../types/VerifyTrustOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/VerifyTrustInput";
export * from "../types/VerifyTrustOutput";
export * from "../types/VerifyTrustExceptionsUnion";

export class VerifyTrustCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      VerifyTrustInput,
      OutputTypesUnion,
      VerifyTrustOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = VerifyTrust;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    VerifyTrustInput,
    VerifyTrustOutput,
    Uint8Array
  >();

  constructor(readonly input: VerifyTrustInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<VerifyTrustInput, VerifyTrustOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<VerifyTrustInput, VerifyTrustOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
