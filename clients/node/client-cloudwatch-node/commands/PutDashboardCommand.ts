import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutDashboard } from "../model/operations/PutDashboard";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutDashboardInput } from "../types/PutDashboardInput";
import { PutDashboardOutput } from "../types/PutDashboardOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/PutDashboardInput";
export * from "../types/PutDashboardOutput";
export * from "../types/PutDashboardExceptionsUnion";

export class PutDashboardCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutDashboardInput,
      OutputTypesUnion,
      PutDashboardOutput,
      CloudWatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutDashboard;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutDashboardInput,
    PutDashboardOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutDashboardInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<PutDashboardInput, PutDashboardOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutDashboardInput, PutDashboardOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
