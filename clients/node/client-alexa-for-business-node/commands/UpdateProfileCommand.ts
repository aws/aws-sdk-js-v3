import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateProfile } from "../model/UpdateProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateProfileInput } from "../types/UpdateProfileInput";
import { UpdateProfileOutput } from "../types/UpdateProfileOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/UpdateProfileInput";
export * from "../types/UpdateProfileOutput";
export * from "../types/UpdateProfileExceptionsUnion";

export class UpdateProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateProfileInput,
      OutputTypesUnion,
      UpdateProfileOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateProfileInput,
    UpdateProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateProfileInput, UpdateProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateProfileInput, UpdateProfileOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
