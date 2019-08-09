import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = RemoveUserFromGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveUserFromGroupInput,
    RemoveUserFromGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveUserFromGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
