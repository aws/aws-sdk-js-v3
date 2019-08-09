import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutEmailIdentityMailFromAttributes } from "../model/PutEmailIdentityMailFromAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutEmailIdentityMailFromAttributesInput } from "../types/PutEmailIdentityMailFromAttributesInput";
import { PutEmailIdentityMailFromAttributesOutput } from "../types/PutEmailIdentityMailFromAttributesOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutEmailIdentityMailFromAttributesInput";
export * from "../types/PutEmailIdentityMailFromAttributesOutput";
export * from "../types/PutEmailIdentityMailFromAttributesExceptionsUnion";

export class PutEmailIdentityMailFromAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutEmailIdentityMailFromAttributesInput,
      OutputTypesUnion,
      PutEmailIdentityMailFromAttributesOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutEmailIdentityMailFromAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEmailIdentityMailFromAttributesInput,
    PutEmailIdentityMailFromAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutEmailIdentityMailFromAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutEmailIdentityMailFromAttributesInput,
    PutEmailIdentityMailFromAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutEmailIdentityMailFromAttributesInput,
        PutEmailIdentityMailFromAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
