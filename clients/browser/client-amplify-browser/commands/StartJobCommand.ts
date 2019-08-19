import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartJob } from "../model/operations/StartJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartJobInput } from "../types/StartJobInput";
import { StartJobOutput } from "../types/StartJobOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/StartJobInput";
export * from "../types/StartJobOutput";
export * from "../types/StartJobExceptionsUnion";

export class StartJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartJobInput,
      OutputTypesUnion,
      StartJobOutput,
      AmplifyResolvedConfiguration,
      Blob
    > {
  readonly model = StartJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartJobInput,
    StartJobOutput,
    Blob
  >();

  constructor(readonly input: StartJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<StartJobInput, StartJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartJobInput, StartJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
