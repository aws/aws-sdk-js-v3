import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateThing } from "../model/CreateThing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateThingInput } from "../types/CreateThingInput";
import { CreateThingOutput } from "../types/CreateThingOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateThingInput";
export * from "../types/CreateThingOutput";
export * from "../types/CreateThingExceptionsUnion";

export class CreateThingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateThingInput,
      OutputTypesUnion,
      CreateThingOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = CreateThing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateThingInput,
    CreateThingOutput,
    Blob
  >();

  constructor(readonly input: CreateThingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateThingInput, CreateThingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateThingInput, CreateThingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
