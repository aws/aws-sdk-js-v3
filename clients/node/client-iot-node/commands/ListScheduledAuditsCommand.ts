import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListScheduledAudits } from "../model/ListScheduledAudits";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListScheduledAuditsInput } from "../types/ListScheduledAuditsInput";
import { ListScheduledAuditsOutput } from "../types/ListScheduledAuditsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListScheduledAuditsInput";
export * from "../types/ListScheduledAuditsOutput";
export * from "../types/ListScheduledAuditsExceptionsUnion";

export class ListScheduledAuditsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListScheduledAuditsInput,
      OutputTypesUnion,
      ListScheduledAuditsOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListScheduledAudits;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListScheduledAuditsInput,
    ListScheduledAuditsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListScheduledAuditsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListScheduledAuditsInput,
    ListScheduledAuditsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListScheduledAuditsInput, ListScheduledAuditsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
