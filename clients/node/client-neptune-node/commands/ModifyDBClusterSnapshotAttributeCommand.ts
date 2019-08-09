import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyDBClusterSnapshotAttribute } from "../model/ModifyDBClusterSnapshotAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBClusterSnapshotAttributeInput } from "../types/ModifyDBClusterSnapshotAttributeInput";
import { ModifyDBClusterSnapshotAttributeOutput } from "../types/ModifyDBClusterSnapshotAttributeOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/ModifyDBClusterSnapshotAttributeInput";
export * from "../types/ModifyDBClusterSnapshotAttributeOutput";
export * from "../types/ModifyDBClusterSnapshotAttributeExceptionsUnion";

export class ModifyDBClusterSnapshotAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyDBClusterSnapshotAttributeInput,
      OutputTypesUnion,
      ModifyDBClusterSnapshotAttributeOutput,
      NeptuneResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyDBClusterSnapshotAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBClusterSnapshotAttributeInput,
    ModifyDBClusterSnapshotAttributeOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyDBClusterSnapshotAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyDBClusterSnapshotAttributeInput,
    ModifyDBClusterSnapshotAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyDBClusterSnapshotAttributeInput,
        ModifyDBClusterSnapshotAttributeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
