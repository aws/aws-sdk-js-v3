import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSlotTypeVersion } from "../model/CreateSlotTypeVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSlotTypeVersionInput } from "../types/CreateSlotTypeVersionInput";
import { CreateSlotTypeVersionOutput } from "../types/CreateSlotTypeVersionOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/CreateSlotTypeVersionInput";
export * from "../types/CreateSlotTypeVersionOutput";
export * from "../types/CreateSlotTypeVersionExceptionsUnion";

export class CreateSlotTypeVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSlotTypeVersionInput,
      OutputTypesUnion,
      CreateSlotTypeVersionOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateSlotTypeVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSlotTypeVersionInput,
    CreateSlotTypeVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateSlotTypeVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSlotTypeVersionInput,
    CreateSlotTypeVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSlotTypeVersionInput, CreateSlotTypeVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
