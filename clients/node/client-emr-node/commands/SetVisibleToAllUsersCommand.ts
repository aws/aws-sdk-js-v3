import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetVisibleToAllUsers } from "../model/operations/SetVisibleToAllUsers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetVisibleToAllUsersInput } from "../types/SetVisibleToAllUsersInput";
import { SetVisibleToAllUsersOutput } from "../types/SetVisibleToAllUsersOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/SetVisibleToAllUsersInput";
export * from "../types/SetVisibleToAllUsersOutput";
export * from "../types/SetVisibleToAllUsersExceptionsUnion";

export class SetVisibleToAllUsersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetVisibleToAllUsersInput,
      OutputTypesUnion,
      SetVisibleToAllUsersOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetVisibleToAllUsers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetVisibleToAllUsersInput,
    SetVisibleToAllUsersOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetVisibleToAllUsersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetVisibleToAllUsersInput,
    SetVisibleToAllUsersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetVisibleToAllUsersInput, SetVisibleToAllUsersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
