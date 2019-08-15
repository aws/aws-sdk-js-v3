import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteUserProfile } from "../model/operations/DeleteUserProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUserProfileInput } from "../types/DeleteUserProfileInput";
import { DeleteUserProfileOutput } from "../types/DeleteUserProfileOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DeleteUserProfileInput";
export * from "../types/DeleteUserProfileOutput";
export * from "../types/DeleteUserProfileExceptionsUnion";

export class DeleteUserProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUserProfileInput,
      OutputTypesUnion,
      DeleteUserProfileOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteUserProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUserProfileInput,
    DeleteUserProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteUserProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteUserProfileInput, DeleteUserProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteUserProfileInput, DeleteUserProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
