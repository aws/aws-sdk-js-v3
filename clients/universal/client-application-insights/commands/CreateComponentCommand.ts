import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateComponent } from "../model/CreateComponent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateComponentInput } from "../types/CreateComponentInput";
import { CreateComponentOutput } from "../types/CreateComponentOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/CreateComponentInput";
export * from "../types/CreateComponentOutput";
export * from "../types/CreateComponentExceptionsUnion";

export class CreateComponentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateComponentInput,
      OutputTypesUnion,
      CreateComponentOutput,
      ApplicationInsightsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateComponent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateComponentInput,
    CreateComponentOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateComponentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateComponentInput, CreateComponentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateComponentInput, CreateComponentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
