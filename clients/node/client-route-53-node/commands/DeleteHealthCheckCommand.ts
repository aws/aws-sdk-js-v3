import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteHealthCheck } from "../model/operations/DeleteHealthCheck";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteHealthCheckInput } from "../types/DeleteHealthCheckInput";
import { DeleteHealthCheckOutput } from "../types/DeleteHealthCheckOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/DeleteHealthCheckInput";
export * from "../types/DeleteHealthCheckOutput";
export * from "../types/DeleteHealthCheckExceptionsUnion";

export class DeleteHealthCheckCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteHealthCheckInput,
      OutputTypesUnion,
      DeleteHealthCheckOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteHealthCheck;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteHealthCheckInput,
    DeleteHealthCheckOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteHealthCheckInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteHealthCheckInput, DeleteHealthCheckOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteHealthCheckInput, DeleteHealthCheckOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
