import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSecurityProfile } from "../model/CreateSecurityProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSecurityProfileInput } from "../types/CreateSecurityProfileInput";
import { CreateSecurityProfileOutput } from "../types/CreateSecurityProfileOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateSecurityProfileInput";
export * from "../types/CreateSecurityProfileOutput";
export * from "../types/CreateSecurityProfileExceptionsUnion";

export class CreateSecurityProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSecurityProfileInput,
      OutputTypesUnion,
      CreateSecurityProfileOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSecurityProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSecurityProfileInput,
    CreateSecurityProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSecurityProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSecurityProfileInput,
    CreateSecurityProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSecurityProfileInput, CreateSecurityProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
