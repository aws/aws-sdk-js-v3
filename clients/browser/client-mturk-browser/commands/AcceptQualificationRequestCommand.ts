import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AcceptQualificationRequest } from "../model/operations/AcceptQualificationRequest";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptQualificationRequestInput } from "../types/AcceptQualificationRequestInput";
import { AcceptQualificationRequestOutput } from "../types/AcceptQualificationRequestOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/AcceptQualificationRequestInput";
export * from "../types/AcceptQualificationRequestOutput";
export * from "../types/AcceptQualificationRequestExceptionsUnion";

export class AcceptQualificationRequestCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptQualificationRequestInput,
      OutputTypesUnion,
      AcceptQualificationRequestOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = AcceptQualificationRequest;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptQualificationRequestInput,
    AcceptQualificationRequestOutput,
    Blob
  >();

  constructor(readonly input: AcceptQualificationRequestInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcceptQualificationRequestInput,
    AcceptQualificationRequestOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AcceptQualificationRequestInput,
        AcceptQualificationRequestOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
