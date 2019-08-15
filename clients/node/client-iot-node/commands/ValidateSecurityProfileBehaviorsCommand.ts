import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ValidateSecurityProfileBehaviors } from "../model/operations/ValidateSecurityProfileBehaviors";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ValidateSecurityProfileBehaviorsInput } from "../types/ValidateSecurityProfileBehaviorsInput";
import { ValidateSecurityProfileBehaviorsOutput } from "../types/ValidateSecurityProfileBehaviorsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ValidateSecurityProfileBehaviorsInput";
export * from "../types/ValidateSecurityProfileBehaviorsOutput";
export * from "../types/ValidateSecurityProfileBehaviorsExceptionsUnion";

export class ValidateSecurityProfileBehaviorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ValidateSecurityProfileBehaviorsInput,
      OutputTypesUnion,
      ValidateSecurityProfileBehaviorsOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ValidateSecurityProfileBehaviors;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ValidateSecurityProfileBehaviorsInput,
    ValidateSecurityProfileBehaviorsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ValidateSecurityProfileBehaviorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ValidateSecurityProfileBehaviorsInput,
    ValidateSecurityProfileBehaviorsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ValidateSecurityProfileBehaviorsInput,
        ValidateSecurityProfileBehaviorsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
