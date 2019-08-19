import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateStorediSCSIVolume } from "../model/operations/CreateStorediSCSIVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStorediSCSIVolumeInput } from "../types/CreateStorediSCSIVolumeInput";
import { CreateStorediSCSIVolumeOutput } from "../types/CreateStorediSCSIVolumeOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/CreateStorediSCSIVolumeInput";
export * from "../types/CreateStorediSCSIVolumeOutput";
export * from "../types/CreateStorediSCSIVolumeExceptionsUnion";

export class CreateStorediSCSIVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStorediSCSIVolumeInput,
      OutputTypesUnion,
      CreateStorediSCSIVolumeOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateStorediSCSIVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStorediSCSIVolumeInput,
    CreateStorediSCSIVolumeOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateStorediSCSIVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateStorediSCSIVolumeInput,
    CreateStorediSCSIVolumeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateStorediSCSIVolumeInput, CreateStorediSCSIVolumeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
