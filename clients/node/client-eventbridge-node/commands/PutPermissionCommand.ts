import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutPermission } from "../model/PutPermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutPermissionInput } from "../types/PutPermissionInput";
import { PutPermissionOutput } from "../types/PutPermissionOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/PutPermissionInput";
export * from "../types/PutPermissionOutput";
export * from "../types/PutPermissionExceptionsUnion";

export class PutPermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutPermissionInput,
      OutputTypesUnion,
      PutPermissionOutput,
      EventBridgeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutPermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPermissionInput,
    PutPermissionOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutPermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<PutPermissionInput, PutPermissionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutPermissionInput, PutPermissionOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
