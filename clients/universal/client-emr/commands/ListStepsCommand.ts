import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSteps } from "../model/ListSteps";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStepsInput } from "../types/ListStepsInput";
import { ListStepsOutput } from "../types/ListStepsOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/ListStepsInput";
export * from "../types/ListStepsOutput";
export * from "../types/ListStepsExceptionsUnion";

export class ListStepsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStepsInput,
      OutputTypesUnion,
      ListStepsOutput,
      EMRResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListSteps;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStepsInput,
    ListStepsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListStepsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<ListStepsInput, ListStepsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListStepsInput, ListStepsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
