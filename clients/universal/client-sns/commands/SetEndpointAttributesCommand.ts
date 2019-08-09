import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetEndpointAttributes } from "../model/SetEndpointAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetEndpointAttributesInput } from "../types/SetEndpointAttributesInput";
import { SetEndpointAttributesOutput } from "../types/SetEndpointAttributesOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/SetEndpointAttributesInput";
export * from "../types/SetEndpointAttributesOutput";
export * from "../types/SetEndpointAttributesExceptionsUnion";

export class SetEndpointAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetEndpointAttributesInput,
      OutputTypesUnion,
      SetEndpointAttributesOutput,
      SNSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SetEndpointAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetEndpointAttributesInput,
    SetEndpointAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: SetEndpointAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetEndpointAttributesInput,
    SetEndpointAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetEndpointAttributesInput, SetEndpointAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
