import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveAttributes } from "../model/RemoveAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveAttributesInput } from "../types/RemoveAttributesInput";
import { RemoveAttributesOutput } from "../types/RemoveAttributesOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/RemoveAttributesInput";
export * from "../types/RemoveAttributesOutput";
export * from "../types/RemoveAttributesExceptionsUnion";

export class RemoveAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveAttributesInput,
      OutputTypesUnion,
      RemoveAttributesOutput,
      PinpointResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RemoveAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveAttributesInput,
    RemoveAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: RemoveAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<RemoveAttributesInput, RemoveAttributesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveAttributesInput, RemoveAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
