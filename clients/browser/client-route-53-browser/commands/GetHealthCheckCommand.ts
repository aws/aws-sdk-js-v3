import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetHealthCheck } from "../model/GetHealthCheck";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHealthCheckInput } from "../types/GetHealthCheckInput";
import { GetHealthCheckOutput } from "../types/GetHealthCheckOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetHealthCheckInput";
export * from "../types/GetHealthCheckOutput";
export * from "../types/GetHealthCheckExceptionsUnion";

export class GetHealthCheckCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHealthCheckInput,
      OutputTypesUnion,
      GetHealthCheckOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = GetHealthCheck;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHealthCheckInput,
    GetHealthCheckOutput,
    Blob
  >();

  constructor(readonly input: GetHealthCheckInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetHealthCheckInput, GetHealthCheckOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetHealthCheckInput, GetHealthCheckOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
