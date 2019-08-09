import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetHealthCheckStatus } from "../model/GetHealthCheckStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHealthCheckStatusInput } from "../types/GetHealthCheckStatusInput";
import { GetHealthCheckStatusOutput } from "../types/GetHealthCheckStatusOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetHealthCheckStatusInput";
export * from "../types/GetHealthCheckStatusOutput";
export * from "../types/GetHealthCheckStatusExceptionsUnion";

export class GetHealthCheckStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHealthCheckStatusInput,
      OutputTypesUnion,
      GetHealthCheckStatusOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetHealthCheckStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHealthCheckStatusInput,
    GetHealthCheckStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetHealthCheckStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetHealthCheckStatusInput,
    GetHealthCheckStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetHealthCheckStatusInput, GetHealthCheckStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
