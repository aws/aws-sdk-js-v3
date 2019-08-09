import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterThing } from "../model/RegisterThing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterThingInput } from "../types/RegisterThingInput";
import { RegisterThingOutput } from "../types/RegisterThingOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/RegisterThingInput";
export * from "../types/RegisterThingOutput";
export * from "../types/RegisterThingExceptionsUnion";

export class RegisterThingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterThingInput,
      OutputTypesUnion,
      RegisterThingOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RegisterThing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterThingInput,
    RegisterThingOutput,
    Uint8Array
  >();

  constructor(readonly input: RegisterThingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterThingInput, RegisterThingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterThingInput, RegisterThingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
