import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CopySnapshot } from "../model/CopySnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopySnapshotInput } from "../types/CopySnapshotInput";
import { CopySnapshotOutput } from "../types/CopySnapshotOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/CopySnapshotInput";
export * from "../types/CopySnapshotOutput";
export * from "../types/CopySnapshotExceptionsUnion";

export class CopySnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopySnapshotInput,
      OutputTypesUnion,
      CopySnapshotOutput,
      ElastiCacheResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CopySnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopySnapshotInput,
    CopySnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: CopySnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<CopySnapshotInput, CopySnapshotOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CopySnapshotInput, CopySnapshotOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
