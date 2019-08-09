import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RestoreFromSnapshot } from "../model/RestoreFromSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreFromSnapshotInput } from "../types/RestoreFromSnapshotInput";
import { RestoreFromSnapshotOutput } from "../types/RestoreFromSnapshotOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/RestoreFromSnapshotInput";
export * from "../types/RestoreFromSnapshotOutput";
export * from "../types/RestoreFromSnapshotExceptionsUnion";

export class RestoreFromSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreFromSnapshotInput,
      OutputTypesUnion,
      RestoreFromSnapshotOutput,
      DirectoryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RestoreFromSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreFromSnapshotInput,
    RestoreFromSnapshotOutput,
    Uint8Array
  >();

  constructor(readonly input: RestoreFromSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreFromSnapshotInput,
    RestoreFromSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestoreFromSnapshotInput, RestoreFromSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
