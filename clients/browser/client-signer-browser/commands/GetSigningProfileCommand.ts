import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSigningProfile } from "../model/operations/GetSigningProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSigningProfileInput } from "../types/GetSigningProfileInput";
import { GetSigningProfileOutput } from "../types/GetSigningProfileOutput";
import { signerResolvedConfiguration } from "../signerConfiguration";
export * from "../types/GetSigningProfileInput";
export * from "../types/GetSigningProfileOutput";
export * from "../types/GetSigningProfileExceptionsUnion";

export class GetSigningProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSigningProfileInput,
      OutputTypesUnion,
      GetSigningProfileOutput,
      signerResolvedConfiguration,
      Blob
    > {
  readonly model = GetSigningProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSigningProfileInput,
    GetSigningProfileOutput,
    Blob
  >();

  constructor(readonly input: GetSigningProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: signerResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSigningProfileInput, GetSigningProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSigningProfileInput, GetSigningProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
