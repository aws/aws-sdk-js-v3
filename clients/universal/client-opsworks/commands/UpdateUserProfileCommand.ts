import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = UpdateUserProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserProfileInput,
    UpdateUserProfileOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateUserProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
