import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateHealthCheck } from "../model/operations/CreateHealthCheck";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateHealthCheckInput } from "../types/CreateHealthCheckInput";
import { CreateHealthCheckOutput } from "../types/CreateHealthCheckOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/CreateHealthCheckInput";
export * from "../types/CreateHealthCheckOutput";
export * from "../types/CreateHealthCheckExceptionsUnion";

export class CreateHealthCheckCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateHealthCheckInput,
      OutputTypesUnion,
      CreateHealthCheckOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateHealthCheck;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHealthCheckInput,
    CreateHealthCheckOutput,
    Blob
  >();

  constructor(readonly input: CreateHealthCheckInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateHealthCheckInput, CreateHealthCheckOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateHealthCheckInput, CreateHealthCheckOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
