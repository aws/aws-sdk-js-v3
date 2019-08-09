import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateThingType } from "../model/CreateThingType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateThingTypeInput } from "../types/CreateThingTypeInput";
import { CreateThingTypeOutput } from "../types/CreateThingTypeOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateThingTypeInput";
export * from "../types/CreateThingTypeOutput";
export * from "../types/CreateThingTypeExceptionsUnion";

export class CreateThingTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateThingTypeInput,
      OutputTypesUnion,
      CreateThingTypeOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = CreateThingType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateThingTypeInput,
    CreateThingTypeOutput,
    Blob
  >();

  constructor(readonly input: CreateThingTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateThingTypeInput, CreateThingTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateThingTypeInput, CreateThingTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
