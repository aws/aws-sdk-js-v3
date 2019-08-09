import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopJob } from "../model/StopJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopJobInput } from "../types/StopJobInput";
import { StopJobOutput } from "../types/StopJobOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/StopJobInput";
export * from "../types/StopJobOutput";
export * from "../types/StopJobExceptionsUnion";

export class StopJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopJobInput,
      OutputTypesUnion,
      StopJobOutput,
      AmplifyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StopJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopJobInput,
    StopJobOutput,
    Uint8Array
  >();

  constructor(readonly input: StopJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<StopJobInput, StopJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopJobInput, StopJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
