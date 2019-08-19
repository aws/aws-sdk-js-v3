import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DissociateEntityFromThing } from "../model/operations/DissociateEntityFromThing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DissociateEntityFromThingInput } from "../types/DissociateEntityFromThingInput";
import { DissociateEntityFromThingOutput } from "../types/DissociateEntityFromThingOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/DissociateEntityFromThingInput";
export * from "../types/DissociateEntityFromThingOutput";
export * from "../types/DissociateEntityFromThingExceptionsUnion";

export class DissociateEntityFromThingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DissociateEntityFromThingInput,
      OutputTypesUnion,
      DissociateEntityFromThingOutput,
      IoTThingsGraphResolvedConfiguration,
      Blob
    > {
  readonly model = DissociateEntityFromThing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DissociateEntityFromThingInput,
    DissociateEntityFromThingOutput,
    Blob
  >();

  constructor(readonly input: DissociateEntityFromThingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DissociateEntityFromThingInput,
    DissociateEntityFromThingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DissociateEntityFromThingInput, DissociateEntityFromThingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
