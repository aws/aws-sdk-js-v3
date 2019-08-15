import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetHealthCheckCount } from "../model/operations/GetHealthCheckCount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHealthCheckCountInput } from "../types/GetHealthCheckCountInput";
import { GetHealthCheckCountOutput } from "../types/GetHealthCheckCountOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetHealthCheckCountInput";
export * from "../types/GetHealthCheckCountOutput";
export * from "../types/GetHealthCheckCountExceptionsUnion";

export class GetHealthCheckCountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHealthCheckCountInput,
      OutputTypesUnion,
      GetHealthCheckCountOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = GetHealthCheckCount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHealthCheckCountInput,
    GetHealthCheckCountOutput,
    Blob
  >();

  constructor(readonly input: GetHealthCheckCountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetHealthCheckCountInput,
    GetHealthCheckCountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetHealthCheckCountInput, GetHealthCheckCountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
