import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopImageBuilder } from "../model/StopImageBuilder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopImageBuilderInput } from "../types/StopImageBuilderInput";
import { StopImageBuilderOutput } from "../types/StopImageBuilderOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/StopImageBuilderInput";
export * from "../types/StopImageBuilderOutput";
export * from "../types/StopImageBuilderExceptionsUnion";

export class StopImageBuilderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopImageBuilderInput,
      OutputTypesUnion,
      StopImageBuilderOutput,
      AppStreamResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StopImageBuilder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopImageBuilderInput,
    StopImageBuilderOutput,
    Uint8Array
  >();

  constructor(readonly input: StopImageBuilderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<StopImageBuilderInput, StopImageBuilderOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopImageBuilderInput, StopImageBuilderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
