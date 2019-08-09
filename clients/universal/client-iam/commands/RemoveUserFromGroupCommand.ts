import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveUserFromGroup } from "../model/RemoveUserFromGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveUserFromGroupInput } from "../types/RemoveUserFromGroupInput";
import { RemoveUserFromGroupOutput } from "../types/RemoveUserFromGroupOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/RemoveUserFromGroupInput";
export * from "../types/RemoveUserFromGroupOutput";
export * from "../types/RemoveUserFromGroupExceptionsUnion";

export class RemoveUserFromGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveUserFromGroupInput,
      OutputTypesUnion,
      RemoveUserFromGroupOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RemoveUserFromGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveUserFromGroupInput,
    RemoveUserFromGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: RemoveUserFromGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveUserFromGroupInput,
    RemoveUserFromGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveUserFromGroupInput, RemoveUserFromGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
