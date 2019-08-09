import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateHealthCheck } from "../model/UpdateHealthCheck";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateHealthCheckInput } from "../types/UpdateHealthCheckInput";
import { UpdateHealthCheckOutput } from "../types/UpdateHealthCheckOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/UpdateHealthCheckInput";
export * from "../types/UpdateHealthCheckOutput";
export * from "../types/UpdateHealthCheckExceptionsUnion";

export class UpdateHealthCheckCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateHealthCheckInput,
      OutputTypesUnion,
      UpdateHealthCheckOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateHealthCheck;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateHealthCheckInput,
    UpdateHealthCheckOutput,
    Blob
  >();

  constructor(readonly input: UpdateHealthCheckInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateHealthCheckInput, UpdateHealthCheckOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateHealthCheckInput, UpdateHealthCheckOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
