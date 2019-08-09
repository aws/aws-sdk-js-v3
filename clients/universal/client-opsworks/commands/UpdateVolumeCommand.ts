import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateVolume } from "../model/UpdateVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateVolumeInput } from "../types/UpdateVolumeInput";
import { UpdateVolumeOutput } from "../types/UpdateVolumeOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/UpdateVolumeInput";
export * from "../types/UpdateVolumeOutput";
export * from "../types/UpdateVolumeExceptionsUnion";

export class UpdateVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateVolumeInput,
      OutputTypesUnion,
      UpdateVolumeOutput,
      OpsWorksResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVolumeInput,
    UpdateVolumeOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateVolumeInput, UpdateVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateVolumeInput, UpdateVolumeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
