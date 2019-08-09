import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachVolume } from "../model/AttachVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachVolumeInput } from "../types/AttachVolumeInput";
import { AttachVolumeOutput } from "../types/AttachVolumeOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/AttachVolumeInput";
export * from "../types/AttachVolumeOutput";
export * from "../types/AttachVolumeExceptionsUnion";

export class AttachVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachVolumeInput,
      OutputTypesUnion,
      AttachVolumeOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AttachVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachVolumeInput,
    AttachVolumeOutput,
    Uint8Array
  >();

  constructor(readonly input: AttachVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachVolumeInput, AttachVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachVolumeInput, AttachVolumeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
