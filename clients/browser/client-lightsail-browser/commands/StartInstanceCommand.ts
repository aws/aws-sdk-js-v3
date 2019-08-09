import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartInstance } from "../model/StartInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartInstanceInput } from "../types/StartInstanceInput";
import { StartInstanceOutput } from "../types/StartInstanceOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/StartInstanceInput";
export * from "../types/StartInstanceOutput";
export * from "../types/StartInstanceExceptionsUnion";

export class StartInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartInstanceInput,
      OutputTypesUnion,
      StartInstanceOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = StartInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartInstanceInput,
    StartInstanceOutput,
    Blob
  >();

  constructor(readonly input: StartInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<StartInstanceInput, StartInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartInstanceInput, StartInstanceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
