import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateUserProfile } from "../model/UpdateUserProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUserProfileInput } from "../types/UpdateUserProfileInput";
import { UpdateUserProfileOutput } from "../types/UpdateUserProfileOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/UpdateUserProfileInput";
export * from "../types/UpdateUserProfileOutput";
export * from "../types/UpdateUserProfileExceptionsUnion";

export class UpdateUserProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUserProfileInput,
      OutputTypesUnion,
      UpdateUserProfileOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateUserProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserProfileInput,
    UpdateUserProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateUserProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateUserProfileInput, UpdateUserProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUserProfileInput, UpdateUserProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
