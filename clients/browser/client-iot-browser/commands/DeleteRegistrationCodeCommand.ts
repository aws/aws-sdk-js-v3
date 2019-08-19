import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRegistrationCode } from "../model/operations/DeleteRegistrationCode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRegistrationCodeInput } from "../types/DeleteRegistrationCodeInput";
import { DeleteRegistrationCodeOutput } from "../types/DeleteRegistrationCodeOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteRegistrationCodeInput";
export * from "../types/DeleteRegistrationCodeOutput";
export * from "../types/DeleteRegistrationCodeExceptionsUnion";

export class DeleteRegistrationCodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRegistrationCodeInput,
      OutputTypesUnion,
      DeleteRegistrationCodeOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRegistrationCode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRegistrationCodeInput,
    DeleteRegistrationCodeOutput,
    Blob
  >();

  constructor(readonly input: DeleteRegistrationCodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRegistrationCodeInput,
    DeleteRegistrationCodeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRegistrationCodeInput, DeleteRegistrationCodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
