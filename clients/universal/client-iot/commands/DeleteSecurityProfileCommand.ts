import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSecurityProfile } from "../model/DeleteSecurityProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSecurityProfileInput } from "../types/DeleteSecurityProfileInput";
import { DeleteSecurityProfileOutput } from "../types/DeleteSecurityProfileOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteSecurityProfileInput";
export * from "../types/DeleteSecurityProfileOutput";
export * from "../types/DeleteSecurityProfileExceptionsUnion";

export class DeleteSecurityProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSecurityProfileInput,
      OutputTypesUnion,
      DeleteSecurityProfileOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteSecurityProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSecurityProfileInput,
    DeleteSecurityProfileOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteSecurityProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSecurityProfileInput,
    DeleteSecurityProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSecurityProfileInput, DeleteSecurityProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
