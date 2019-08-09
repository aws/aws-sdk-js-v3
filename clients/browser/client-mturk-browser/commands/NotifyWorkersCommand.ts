import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { NotifyWorkers } from "../model/NotifyWorkers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { NotifyWorkersInput } from "../types/NotifyWorkersInput";
import { NotifyWorkersOutput } from "../types/NotifyWorkersOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/NotifyWorkersInput";
export * from "../types/NotifyWorkersOutput";
export * from "../types/NotifyWorkersExceptionsUnion";

export class NotifyWorkersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      NotifyWorkersInput,
      OutputTypesUnion,
      NotifyWorkersOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = NotifyWorkers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    NotifyWorkersInput,
    NotifyWorkersOutput,
    Blob
  >();

  constructor(readonly input: NotifyWorkersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<NotifyWorkersInput, NotifyWorkersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<NotifyWorkersInput, NotifyWorkersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
