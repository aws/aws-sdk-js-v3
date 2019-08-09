import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateMyUserProfile } from "../model/UpdateMyUserProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMyUserProfileInput } from "../types/UpdateMyUserProfileInput";
import { UpdateMyUserProfileOutput } from "../types/UpdateMyUserProfileOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/UpdateMyUserProfileInput";
export * from "../types/UpdateMyUserProfileOutput";
export * from "../types/UpdateMyUserProfileExceptionsUnion";

export class UpdateMyUserProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMyUserProfileInput,
      OutputTypesUnion,
      UpdateMyUserProfileOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateMyUserProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMyUserProfileInput,
    UpdateMyUserProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateMyUserProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateMyUserProfileInput,
    UpdateMyUserProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateMyUserProfileInput, UpdateMyUserProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
