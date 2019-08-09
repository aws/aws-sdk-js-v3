import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateInstancesFromSnapshot } from "../model/CreateInstancesFromSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInstancesFromSnapshotInput } from "../types/CreateInstancesFromSnapshotInput";
import { CreateInstancesFromSnapshotOutput } from "../types/CreateInstancesFromSnapshotOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateInstancesFromSnapshotInput";
export * from "../types/CreateInstancesFromSnapshotOutput";
export * from "../types/CreateInstancesFromSnapshotExceptionsUnion";

export class CreateInstancesFromSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInstancesFromSnapshotInput,
      OutputTypesUnion,
      CreateInstancesFromSnapshotOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateInstancesFromSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInstancesFromSnapshotInput,
    CreateInstancesFromSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateInstancesFromSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateInstancesFromSnapshotInput,
    CreateInstancesFromSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateInstancesFromSnapshotInput,
        CreateInstancesFromSnapshotOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
