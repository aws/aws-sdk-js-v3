import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteHapg } from "../model/DeleteHapg";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteHapgInput } from "../types/DeleteHapgInput";
import { DeleteHapgOutput } from "../types/DeleteHapgOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/DeleteHapgInput";
export * from "../types/DeleteHapgOutput";
export * from "../types/DeleteHapgExceptionsUnion";

export class DeleteHapgCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteHapgInput,
      OutputTypesUnion,
      DeleteHapgOutput,
      CloudHSMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteHapg;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteHapgInput,
    DeleteHapgOutput,
    Blob
  >();

  constructor(readonly input: DeleteHapgInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteHapgInput, DeleteHapgOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteHapgInput, DeleteHapgOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
