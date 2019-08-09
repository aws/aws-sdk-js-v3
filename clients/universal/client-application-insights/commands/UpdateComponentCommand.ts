import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateComponent } from "../model/UpdateComponent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateComponentInput } from "../types/UpdateComponentInput";
import { UpdateComponentOutput } from "../types/UpdateComponentOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/UpdateComponentInput";
export * from "../types/UpdateComponentOutput";
export * from "../types/UpdateComponentExceptionsUnion";

export class UpdateComponentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateComponentInput,
      OutputTypesUnion,
      UpdateComponentOutput,
      ApplicationInsightsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateComponent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateComponentInput,
    UpdateComponentOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateComponentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateComponentInput, UpdateComponentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateComponentInput, UpdateComponentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
