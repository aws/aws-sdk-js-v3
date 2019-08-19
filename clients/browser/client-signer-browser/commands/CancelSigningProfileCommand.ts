import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelSigningProfile } from "../model/operations/CancelSigningProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelSigningProfileInput } from "../types/CancelSigningProfileInput";
import { CancelSigningProfileOutput } from "../types/CancelSigningProfileOutput";
import { signerResolvedConfiguration } from "../signerConfiguration";
export * from "../types/CancelSigningProfileInput";
export * from "../types/CancelSigningProfileOutput";
export * from "../types/CancelSigningProfileExceptionsUnion";

export class CancelSigningProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelSigningProfileInput,
      OutputTypesUnion,
      CancelSigningProfileOutput,
      signerResolvedConfiguration,
      Blob
    > {
  readonly model = CancelSigningProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelSigningProfileInput,
    CancelSigningProfileOutput,
    Blob
  >();

  constructor(readonly input: CancelSigningProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: signerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelSigningProfileInput,
    CancelSigningProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelSigningProfileInput, CancelSigningProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
