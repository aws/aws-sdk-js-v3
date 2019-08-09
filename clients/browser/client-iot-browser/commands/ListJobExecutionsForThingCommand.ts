import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListJobExecutionsForThing } from "../model/ListJobExecutionsForThing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListJobExecutionsForThingInput } from "../types/ListJobExecutionsForThingInput";
import { ListJobExecutionsForThingOutput } from "../types/ListJobExecutionsForThingOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListJobExecutionsForThingInput";
export * from "../types/ListJobExecutionsForThingOutput";
export * from "../types/ListJobExecutionsForThingExceptionsUnion";

export class ListJobExecutionsForThingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListJobExecutionsForThingInput,
      OutputTypesUnion,
      ListJobExecutionsForThingOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListJobExecutionsForThing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListJobExecutionsForThingInput,
    ListJobExecutionsForThingOutput,
    Blob
  >();

  constructor(readonly input: ListJobExecutionsForThingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListJobExecutionsForThingInput,
    ListJobExecutionsForThingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListJobExecutionsForThingInput, ListJobExecutionsForThingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
