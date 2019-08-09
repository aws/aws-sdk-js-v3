import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVolume } from "../model/DeleteVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVolumeInput } from "../types/DeleteVolumeInput";
import { DeleteVolumeOutput } from "../types/DeleteVolumeOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DeleteVolumeInput";
export * from "../types/DeleteVolumeOutput";
export * from "../types/DeleteVolumeExceptionsUnion";

export class DeleteVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVolumeInput,
      OutputTypesUnion,
      DeleteVolumeOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVolumeInput,
    DeleteVolumeOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteVolumeInput, DeleteVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVolumeInput, DeleteVolumeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
