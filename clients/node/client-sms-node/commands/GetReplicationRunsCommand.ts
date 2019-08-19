import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetReplicationRuns } from "../model/operations/GetReplicationRuns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetReplicationRunsInput } from "../types/GetReplicationRunsInput";
import { GetReplicationRunsOutput } from "../types/GetReplicationRunsOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/GetReplicationRunsInput";
export * from "../types/GetReplicationRunsOutput";
export * from "../types/GetReplicationRunsExceptionsUnion";

export class GetReplicationRunsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetReplicationRunsInput,
      OutputTypesUnion,
      GetReplicationRunsOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetReplicationRuns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetReplicationRunsInput,
    GetReplicationRunsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetReplicationRunsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetReplicationRunsInput,
    GetReplicationRunsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetReplicationRunsInput, GetReplicationRunsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
