import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetProfile } from "../model/GetProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetProfileInput } from "../types/GetProfileInput";
import { GetProfileOutput } from "../types/GetProfileOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/GetProfileInput";
export * from "../types/GetProfileOutput";
export * from "../types/GetProfileExceptionsUnion";

export class GetProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetProfileInput,
      OutputTypesUnion,
      GetProfileOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = GetProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetProfileInput,
    GetProfileOutput,
    Blob
  >();

  constructor(readonly input: GetProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<GetProfileInput, GetProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetProfileInput, GetProfileOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
