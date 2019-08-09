import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListHITsForQualificationType } from "../model/ListHITsForQualificationType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListHITsForQualificationTypeInput } from "../types/ListHITsForQualificationTypeInput";
import { ListHITsForQualificationTypeOutput } from "../types/ListHITsForQualificationTypeOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/ListHITsForQualificationTypeInput";
export * from "../types/ListHITsForQualificationTypeOutput";
export * from "../types/ListHITsForQualificationTypeExceptionsUnion";

export class ListHITsForQualificationTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListHITsForQualificationTypeInput,
      OutputTypesUnion,
      ListHITsForQualificationTypeOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListHITsForQualificationType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListHITsForQualificationTypeInput,
    ListHITsForQualificationTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListHITsForQualificationTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListHITsForQualificationTypeInput,
    ListHITsForQualificationTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListHITsForQualificationTypeInput,
        ListHITsForQualificationTypeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
