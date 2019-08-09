import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyDBSnapshot } from "../model/ModifyDBSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBSnapshotInput } from "../types/ModifyDBSnapshotInput";
import { ModifyDBSnapshotOutput } from "../types/ModifyDBSnapshotOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/ModifyDBSnapshotInput";
export * from "../types/ModifyDBSnapshotOutput";
export * from "../types/ModifyDBSnapshotExceptionsUnion";

export class ModifyDBSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyDBSnapshotInput,
      OutputTypesUnion,
      ModifyDBSnapshotOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyDBSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBSnapshotInput,
    ModifyDBSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyDBSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyDBSnapshotInput, ModifyDBSnapshotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyDBSnapshotInput, ModifyDBSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
