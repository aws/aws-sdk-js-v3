import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteHsm } from "../model/operations/DeleteHsm";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteHsmInput } from "../types/DeleteHsmInput";
import { DeleteHsmOutput } from "../types/DeleteHsmOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/DeleteHsmInput";
export * from "../types/DeleteHsmOutput";
export * from "../types/DeleteHsmExceptionsUnion";

export class DeleteHsmCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteHsmInput,
      OutputTypesUnion,
      DeleteHsmOutput,
      CloudHSMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteHsm;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteHsmInput,
    DeleteHsmOutput,
    Blob
  >();

  constructor(readonly input: DeleteHsmInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteHsmInput, DeleteHsmOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteHsmInput, DeleteHsmOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
