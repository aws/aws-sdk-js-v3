import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RetrieveTapeRecoveryPoint } from "../model/RetrieveTapeRecoveryPoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RetrieveTapeRecoveryPointInput } from "../types/RetrieveTapeRecoveryPointInput";
import { RetrieveTapeRecoveryPointOutput } from "../types/RetrieveTapeRecoveryPointOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/RetrieveTapeRecoveryPointInput";
export * from "../types/RetrieveTapeRecoveryPointOutput";
export * from "../types/RetrieveTapeRecoveryPointExceptionsUnion";

export class RetrieveTapeRecoveryPointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RetrieveTapeRecoveryPointInput,
      OutputTypesUnion,
      RetrieveTapeRecoveryPointOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RetrieveTapeRecoveryPoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RetrieveTapeRecoveryPointInput,
    RetrieveTapeRecoveryPointOutput,
    _stream.Readable
  >();

  constructor(readonly input: RetrieveTapeRecoveryPointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RetrieveTapeRecoveryPointInput,
    RetrieveTapeRecoveryPointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RetrieveTapeRecoveryPointInput, RetrieveTapeRecoveryPointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
