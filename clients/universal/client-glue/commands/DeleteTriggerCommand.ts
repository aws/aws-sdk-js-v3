import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTrigger } from "../model/DeleteTrigger";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTriggerInput } from "../types/DeleteTriggerInput";
import { DeleteTriggerOutput } from "../types/DeleteTriggerOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/DeleteTriggerInput";
export * from "../types/DeleteTriggerOutput";
export * from "../types/DeleteTriggerExceptionsUnion";

export class DeleteTriggerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTriggerInput,
      OutputTypesUnion,
      DeleteTriggerOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteTrigger;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTriggerInput,
    DeleteTriggerOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteTriggerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTriggerInput, DeleteTriggerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTriggerInput, DeleteTriggerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
