import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteProtection } from "../model/operations/DeleteProtection";
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
      _stream.Readable
    > {
  readonly model = DeleteProtection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteProtectionInput,
    DeleteProtectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteProtectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
