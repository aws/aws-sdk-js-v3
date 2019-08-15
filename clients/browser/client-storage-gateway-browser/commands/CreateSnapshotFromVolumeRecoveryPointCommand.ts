import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSnapshotFromVolumeRecoveryPoint } from "../model/operations/CreateSnapshotFromVolumeRecoveryPoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSnapshotFromVolumeRecoveryPointInput } from "../types/CreateSnapshotFromVolumeRecoveryPointInput";
import { CreateSnapshotFromVolumeRecoveryPointOutput } from "../types/CreateSnapshotFromVolumeRecoveryPointOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/CreateSnapshotFromVolumeRecoveryPointInput";
export * from "../types/CreateSnapshotFromVolumeRecoveryPointOutput";
export * from "../types/CreateSnapshotFromVolumeRecoveryPointExceptionsUnion";

export class CreateSnapshotFromVolumeRecoveryPointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSnapshotFromVolumeRecoveryPointInput,
      OutputTypesUnion,
      CreateSnapshotFromVolumeRecoveryPointOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = CreateSnapshotFromVolumeRecoveryPoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSnapshotFromVolumeRecoveryPointInput,
    CreateSnapshotFromVolumeRecoveryPointOutput,
    Blob
  >();

  constructor(readonly input: CreateSnapshotFromVolumeRecoveryPointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSnapshotFromVolumeRecoveryPointInput,
    CreateSnapshotFromVolumeRecoveryPointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateSnapshotFromVolumeRecoveryPointInput,
        CreateSnapshotFromVolumeRecoveryPointOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
