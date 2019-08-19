import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateProfile } from "../model/operations/CreateProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateProfileInput } from "../types/CreateProfileInput";
import { CreateProfileOutput } from "../types/CreateProfileOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/CreateProfileInput";
export * from "../types/CreateProfileOutput";
export * from "../types/CreateProfileExceptionsUnion";

export class CreateProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateProfileInput,
      OutputTypesUnion,
      CreateProfileOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = CreateProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateProfileInput,
    CreateProfileOutput,
    Blob
  >();

  constructor(readonly input: CreateProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateProfileInput, CreateProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateProfileInput, CreateProfileOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
