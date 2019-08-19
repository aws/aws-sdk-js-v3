import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResetSnapshotAttribute } from "../model/operations/ResetSnapshotAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetSnapshotAttributeInput } from "../types/ResetSnapshotAttributeInput";
import { ResetSnapshotAttributeOutput } from "../types/ResetSnapshotAttributeOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ResetSnapshotAttributeInput";
export * from "../types/ResetSnapshotAttributeOutput";
export * from "../types/ResetSnapshotAttributeExceptionsUnion";

export class ResetSnapshotAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetSnapshotAttributeInput,
      OutputTypesUnion,
      ResetSnapshotAttributeOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResetSnapshotAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetSnapshotAttributeInput,
    ResetSnapshotAttributeOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResetSnapshotAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetSnapshotAttributeInput,
    ResetSnapshotAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetSnapshotAttributeInput, ResetSnapshotAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
