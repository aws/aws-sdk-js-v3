import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RejectQualificationRequest } from "../model/operations/RejectQualificationRequest";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RejectQualificationRequestInput } from "../types/RejectQualificationRequestInput";
import { RejectQualificationRequestOutput } from "../types/RejectQualificationRequestOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/RejectQualificationRequestInput";
export * from "../types/RejectQualificationRequestOutput";
export * from "../types/RejectQualificationRequestExceptionsUnion";

export class RejectQualificationRequestCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RejectQualificationRequestInput,
      OutputTypesUnion,
      RejectQualificationRequestOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RejectQualificationRequest;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RejectQualificationRequestInput,
    RejectQualificationRequestOutput,
    _stream.Readable
  >();

  constructor(readonly input: RejectQualificationRequestInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RejectQualificationRequestInput,
    RejectQualificationRequestOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RejectQualificationRequestInput,
        RejectQualificationRequestOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
