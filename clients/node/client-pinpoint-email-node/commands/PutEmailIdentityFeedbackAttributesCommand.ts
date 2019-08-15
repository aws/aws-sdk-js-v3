import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutEmailIdentityFeedbackAttributes } from "../model/operations/PutEmailIdentityFeedbackAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutEmailIdentityFeedbackAttributesInput } from "../types/PutEmailIdentityFeedbackAttributesInput";
import { PutEmailIdentityFeedbackAttributesOutput } from "../types/PutEmailIdentityFeedbackAttributesOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutEmailIdentityFeedbackAttributesInput";
export * from "../types/PutEmailIdentityFeedbackAttributesOutput";
export * from "../types/PutEmailIdentityFeedbackAttributesExceptionsUnion";

export class PutEmailIdentityFeedbackAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutEmailIdentityFeedbackAttributesInput,
      OutputTypesUnion,
      PutEmailIdentityFeedbackAttributesOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutEmailIdentityFeedbackAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutEmailIdentityFeedbackAttributesInput,
    PutEmailIdentityFeedbackAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutEmailIdentityFeedbackAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutEmailIdentityFeedbackAttributesInput,
    PutEmailIdentityFeedbackAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutEmailIdentityFeedbackAttributesInput,
        PutEmailIdentityFeedbackAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
