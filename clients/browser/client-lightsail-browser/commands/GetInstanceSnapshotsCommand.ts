import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetInstanceSnapshots } from "../model/operations/GetInstanceSnapshots";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInstanceSnapshotsInput } from "../types/GetInstanceSnapshotsInput";
import { GetInstanceSnapshotsOutput } from "../types/GetInstanceSnapshotsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetInstanceSnapshotsInput";
export * from "../types/GetInstanceSnapshotsOutput";
export * from "../types/GetInstanceSnapshotsExceptionsUnion";

export class GetInstanceSnapshotsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInstanceSnapshotsInput,
      OutputTypesUnion,
      GetInstanceSnapshotsOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = GetInstanceSnapshots;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstanceSnapshotsInput,
    GetInstanceSnapshotsOutput,
    Blob
  >();

  constructor(readonly input: GetInstanceSnapshotsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetInstanceSnapshotsInput,
    GetInstanceSnapshotsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInstanceSnapshotsInput, GetInstanceSnapshotsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
