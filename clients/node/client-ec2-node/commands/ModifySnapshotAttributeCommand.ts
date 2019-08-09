import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifySnapshotAttribute } from "../model/ModifySnapshotAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifySnapshotAttributeInput } from "../types/ModifySnapshotAttributeInput";
import { ModifySnapshotAttributeOutput } from "../types/ModifySnapshotAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifySnapshotAttributeInput";
export * from "../types/ModifySnapshotAttributeOutput";
export * from "../types/ModifySnapshotAttributeExceptionsUnion";

export class ModifySnapshotAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifySnapshotAttributeInput,
      OutputTypesUnion,
      ModifySnapshotAttributeOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifySnapshotAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifySnapshotAttributeInput,
    ModifySnapshotAttributeOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifySnapshotAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifySnapshotAttributeInput,
    ModifySnapshotAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifySnapshotAttributeInput, ModifySnapshotAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
