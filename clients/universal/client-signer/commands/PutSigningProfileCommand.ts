import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutSigningProfile } from "../model/PutSigningProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutSigningProfileInput } from "../types/PutSigningProfileInput";
import { PutSigningProfileOutput } from "../types/PutSigningProfileOutput";
import { signerResolvedConfiguration } from "../signerConfiguration";
export * from "../types/PutSigningProfileInput";
export * from "../types/PutSigningProfileOutput";
export * from "../types/PutSigningProfileExceptionsUnion";

export class PutSigningProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutSigningProfileInput,
      OutputTypesUnion,
      PutSigningProfileOutput,
      signerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutSigningProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutSigningProfileInput,
    PutSigningProfileOutput,
    Uint8Array
  >();

  constructor(readonly input: PutSigningProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: signerResolvedConfiguration
  ): __aws_sdk_types.Handler<PutSigningProfileInput, PutSigningProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutSigningProfileInput, PutSigningProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
