import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListVolumeRecoveryPoints } from "../model/operations/ListVolumeRecoveryPoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVolumeRecoveryPointsInput } from "../types/ListVolumeRecoveryPointsInput";
import { ListVolumeRecoveryPointsOutput } from "../types/ListVolumeRecoveryPointsOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/ListVolumeRecoveryPointsInput";
export * from "../types/ListVolumeRecoveryPointsOutput";
export * from "../types/ListVolumeRecoveryPointsExceptionsUnion";

export class ListVolumeRecoveryPointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVolumeRecoveryPointsInput,
      OutputTypesUnion,
      ListVolumeRecoveryPointsOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListVolumeRecoveryPoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVolumeRecoveryPointsInput,
    ListVolumeRecoveryPointsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListVolumeRecoveryPointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListVolumeRecoveryPointsInput,
    ListVolumeRecoveryPointsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListVolumeRecoveryPointsInput, ListVolumeRecoveryPointsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
