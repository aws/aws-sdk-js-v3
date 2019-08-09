import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteProtection } from "../model/DeleteProtection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteProtectionInput } from "../types/DeleteProtectionInput";
import { DeleteProtectionOutput } from "../types/DeleteProtectionOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/DeleteProtectionInput";
export * from "../types/DeleteProtectionOutput";
export * from "../types/DeleteProtectionExceptionsUnion";

export class DeleteProtectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteProtectionInput,
      OutputTypesUnion,
      DeleteProtectionOutput,
      ShieldResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteProtection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteProtectionInput,
    DeleteProtectionOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteProtectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteProtectionInput, DeleteProtectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteProtectionInput, DeleteProtectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
