import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InitiateJob } from "../model/InitiateJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InitiateJobInput } from "../types/InitiateJobInput";
import { InitiateJobOutput } from "../types/InitiateJobOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/InitiateJobInput";
export * from "../types/InitiateJobOutput";
export * from "../types/InitiateJobExceptionsUnion";

export class InitiateJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InitiateJobInput,
      OutputTypesUnion,
      InitiateJobOutput,
      GlacierResolvedConfiguration,
      Uint8Array
    > {
  readonly model = InitiateJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InitiateJobInput,
    InitiateJobOutput,
    Uint8Array
  >();

  constructor(readonly input: InitiateJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<InitiateJobInput, InitiateJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<InitiateJobInput, InitiateJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
