import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateIntentVersion } from "../model/CreateIntentVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateIntentVersionInput } from "../types/CreateIntentVersionInput";
import { CreateIntentVersionOutput } from "../types/CreateIntentVersionOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/CreateIntentVersionInput";
export * from "../types/CreateIntentVersionOutput";
export * from "../types/CreateIntentVersionExceptionsUnion";

export class CreateIntentVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateIntentVersionInput,
      OutputTypesUnion,
      CreateIntentVersionOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateIntentVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateIntentVersionInput,
    CreateIntentVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateIntentVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateIntentVersionInput,
    CreateIntentVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateIntentVersionInput, CreateIntentVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
