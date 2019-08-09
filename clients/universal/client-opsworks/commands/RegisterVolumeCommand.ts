import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterVolume } from "../model/RegisterVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterVolumeInput } from "../types/RegisterVolumeInput";
import { RegisterVolumeOutput } from "../types/RegisterVolumeOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/RegisterVolumeInput";
export * from "../types/RegisterVolumeOutput";
export * from "../types/RegisterVolumeExceptionsUnion";

export class RegisterVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterVolumeInput,
      OutputTypesUnion,
      RegisterVolumeOutput,
      OpsWorksResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RegisterVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterVolumeInput,
    RegisterVolumeOutput,
    Uint8Array
  >();

  constructor(readonly input: RegisterVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterVolumeInput, RegisterVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterVolumeInput, RegisterVolumeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
