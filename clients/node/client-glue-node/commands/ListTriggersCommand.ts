import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTriggers } from "../model/operations/ListTriggers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTriggersInput } from "../types/ListTriggersInput";
import { ListTriggersOutput } from "../types/ListTriggersOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/ListTriggersInput";
export * from "../types/ListTriggersOutput";
export * from "../types/ListTriggersExceptionsUnion";

export class ListTriggersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTriggersInput,
      OutputTypesUnion,
      ListTriggersOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTriggers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTriggersInput,
    ListTriggersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTriggersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTriggersInput, ListTriggersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTriggersInput, ListTriggersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
