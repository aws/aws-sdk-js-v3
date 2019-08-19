import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDashboard } from "../model/operations/GetDashboard";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDashboardInput } from "../types/GetDashboardInput";
import { GetDashboardOutput } from "../types/GetDashboardOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/GetDashboardInput";
export * from "../types/GetDashboardOutput";
export * from "../types/GetDashboardExceptionsUnion";

export class GetDashboardCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDashboardInput,
      OutputTypesUnion,
      GetDashboardOutput,
      CloudWatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDashboard;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDashboardInput,
    GetDashboardOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDashboardInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDashboardInput, GetDashboardOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDashboardInput, GetDashboardOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
