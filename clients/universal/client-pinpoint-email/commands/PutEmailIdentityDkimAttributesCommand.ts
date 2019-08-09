import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutEmailIdentityDkimAttributes } from "../model/PutEmailIdentityDkimAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutEmailIdentityDkimAttributesInput } from "../types/PutEmailIdentityDkimAttributesInput";
import { PutEmailIdentityDkimAttributesOutput } from "../types/PutEmailIdentityDkimAttributesOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutEmailIdentityDkimAttributesInput";
export * from "../types/PutEmailIdentityDkimAttributesOutput";
export * from "../types/PutEmailIdentityDkimAttributesExceptionsUnion";

export class PutEmailIdentityDkimAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutEmailIdentityDkimAttributesInput,
      OutputTypesUnion,
      PutEmailIdentityDkimAttributesOutput,
      PinpointEmailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutEmailIdentityDkimAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEmailIdentityDkimAttributesInput,
    PutEmailIdentityDkimAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: PutEmailIdentityDkimAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutEmailIdentityDkimAttributesInput,
    PutEmailIdentityDkimAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutEmailIdentityDkimAttributesInput,
        PutEmailIdentityDkimAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
