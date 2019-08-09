import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartSession } from "../model/StartSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartSessionInput } from "../types/StartSessionInput";
import { StartSessionOutput } from "../types/StartSessionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/StartSessionInput";
export * from "../types/StartSessionOutput";
export * from "../types/StartSessionExceptionsUnion";

export class StartSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartSessionInput,
      OutputTypesUnion,
      StartSessionOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartSessionInput,
    StartSessionOutput,
    Uint8Array
  >();

  constructor(readonly input: StartSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<StartSessionInput, StartSessionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartSessionInput, StartSessionOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
