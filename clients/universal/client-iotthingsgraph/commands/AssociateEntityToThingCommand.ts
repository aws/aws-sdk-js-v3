import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateEntityToThing } from "../model/AssociateEntityToThing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateEntityToThingInput } from "../types/AssociateEntityToThingInput";
import { AssociateEntityToThingOutput } from "../types/AssociateEntityToThingOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/AssociateEntityToThingInput";
export * from "../types/AssociateEntityToThingOutput";
export * from "../types/AssociateEntityToThingExceptionsUnion";

export class AssociateEntityToThingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateEntityToThingInput,
      OutputTypesUnion,
      AssociateEntityToThingOutput,
      IoTThingsGraphResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateEntityToThing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateEntityToThingInput,
    AssociateEntityToThingOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateEntityToThingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateEntityToThingInput,
    AssociateEntityToThingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateEntityToThingInput, AssociateEntityToThingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
