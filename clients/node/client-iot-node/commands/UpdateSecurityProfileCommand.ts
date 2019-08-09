import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSecurityProfile } from "../model/UpdateSecurityProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSecurityProfileInput } from "../types/UpdateSecurityProfileInput";
import { UpdateSecurityProfileOutput } from "../types/UpdateSecurityProfileOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateSecurityProfileInput";
export * from "../types/UpdateSecurityProfileOutput";
export * from "../types/UpdateSecurityProfileExceptionsUnion";

export class UpdateSecurityProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSecurityProfileInput,
      OutputTypesUnion,
      UpdateSecurityProfileOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSecurityProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSecurityProfileInput,
    UpdateSecurityProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSecurityProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSecurityProfileInput,
    UpdateSecurityProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSecurityProfileInput, UpdateSecurityProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
