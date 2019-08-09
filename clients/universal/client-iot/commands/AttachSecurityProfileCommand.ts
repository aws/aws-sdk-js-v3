import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachSecurityProfile } from "../model/AttachSecurityProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachSecurityProfileInput } from "../types/AttachSecurityProfileInput";
import { AttachSecurityProfileOutput } from "../types/AttachSecurityProfileOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/AttachSecurityProfileInput";
export * from "../types/AttachSecurityProfileOutput";
export * from "../types/AttachSecurityProfileExceptionsUnion";

export class AttachSecurityProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachSecurityProfileInput,
      OutputTypesUnion,
      AttachSecurityProfileOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AttachSecurityProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachSecurityProfileInput,
    AttachSecurityProfileOutput,
    Uint8Array
  >();

  constructor(readonly input: AttachSecurityProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachSecurityProfileInput,
    AttachSecurityProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachSecurityProfileInput, AttachSecurityProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
