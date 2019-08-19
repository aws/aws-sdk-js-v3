import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSnapshotLimits } from "../model/operations/GetSnapshotLimits";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSnapshotLimitsInput } from "../types/GetSnapshotLimitsInput";
import { GetSnapshotLimitsOutput } from "../types/GetSnapshotLimitsOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/GetSnapshotLimitsInput";
export * from "../types/GetSnapshotLimitsOutput";
export * from "../types/GetSnapshotLimitsExceptionsUnion";

export class GetSnapshotLimitsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSnapshotLimitsInput,
      OutputTypesUnion,
      GetSnapshotLimitsOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSnapshotLimits;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSnapshotLimitsInput,
    GetSnapshotLimitsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSnapshotLimitsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSnapshotLimitsInput, GetSnapshotLimitsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSnapshotLimitsInput, GetSnapshotLimitsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
