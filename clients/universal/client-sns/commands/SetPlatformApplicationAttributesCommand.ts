import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetPlatformApplicationAttributes } from "../model/SetPlatformApplicationAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetPlatformApplicationAttributesInput } from "../types/SetPlatformApplicationAttributesInput";
import { SetPlatformApplicationAttributesOutput } from "../types/SetPlatformApplicationAttributesOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/SetPlatformApplicationAttributesInput";
export * from "../types/SetPlatformApplicationAttributesOutput";
export * from "../types/SetPlatformApplicationAttributesExceptionsUnion";

export class SetPlatformApplicationAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetPlatformApplicationAttributesInput,
      OutputTypesUnion,
      SetPlatformApplicationAttributesOutput,
      SNSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SetPlatformApplicationAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetPlatformApplicationAttributesInput,
    SetPlatformApplicationAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: SetPlatformApplicationAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetPlatformApplicationAttributesInput,
    SetPlatformApplicationAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SetPlatformApplicationAttributesInput,
        SetPlatformApplicationAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
