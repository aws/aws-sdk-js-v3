import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartImageBuilder } from "../model/operations/StartImageBuilder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartImageBuilderInput } from "../types/StartImageBuilderInput";
import { StartImageBuilderOutput } from "../types/StartImageBuilderOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/StartImageBuilderInput";
export * from "../types/StartImageBuilderOutput";
export * from "../types/StartImageBuilderExceptionsUnion";

export class StartImageBuilderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartImageBuilderInput,
      OutputTypesUnion,
      StartImageBuilderOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartImageBuilder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartImageBuilderInput,
    StartImageBuilderOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartImageBuilderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<StartImageBuilderInput, StartImageBuilderOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartImageBuilderInput, StartImageBuilderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
