import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyDBSnapshotAttribute } from "../model/operations/ModifyDBSnapshotAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBSnapshotAttributeInput } from "../types/ModifyDBSnapshotAttributeInput";
import { ModifyDBSnapshotAttributeOutput } from "../types/ModifyDBSnapshotAttributeOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/ModifyDBSnapshotAttributeInput";
export * from "../types/ModifyDBSnapshotAttributeOutput";
export * from "../types/ModifyDBSnapshotAttributeExceptionsUnion";

export class ModifyDBSnapshotAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyDBSnapshotAttributeInput,
      OutputTypesUnion,
      ModifyDBSnapshotAttributeOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyDBSnapshotAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBSnapshotAttributeInput,
    ModifyDBSnapshotAttributeOutput,
    Blob
  >();

  constructor(readonly input: ModifyDBSnapshotAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyDBSnapshotAttributeInput,
    ModifyDBSnapshotAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyDBSnapshotAttributeInput, ModifyDBSnapshotAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
