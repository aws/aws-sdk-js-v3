import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterVolume } from "../model/operations/DeregisterVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterVolumeInput } from "../types/DeregisterVolumeInput";
import { DeregisterVolumeOutput } from "../types/DeregisterVolumeOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DeregisterVolumeInput";
export * from "../types/DeregisterVolumeOutput";
export * from "../types/DeregisterVolumeExceptionsUnion";

export class DeregisterVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterVolumeInput,
      OutputTypesUnion,
      DeregisterVolumeOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterVolumeInput,
    DeregisterVolumeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<DeregisterVolumeInput, DeregisterVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterVolumeInput, DeregisterVolumeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
