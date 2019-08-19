import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutPermission } from "../model/operations/PutPermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutPermissionInput } from "../types/PutPermissionInput";
import { PutPermissionOutput } from "../types/PutPermissionOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
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
      CloudWatchEventsResolvedConfiguration,
      Blob
    > {
  readonly model = PutPermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPermissionInput,
    PutPermissionOutput,
    Blob
  >();

  constructor(readonly input: PutPermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchEventsResolvedConfiguration
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
