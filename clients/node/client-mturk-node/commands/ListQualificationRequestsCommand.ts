import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListQualificationRequests } from "../model/ListQualificationRequests";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListQualificationRequestsInput } from "../types/ListQualificationRequestsInput";
import { ListQualificationRequestsOutput } from "../types/ListQualificationRequestsOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/ListQualificationRequestsInput";
export * from "../types/ListQualificationRequestsOutput";
export * from "../types/ListQualificationRequestsExceptionsUnion";

export class ListQualificationRequestsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListQualificationRequestsInput,
      OutputTypesUnion,
      ListQualificationRequestsOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListQualificationRequests;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListQualificationRequestsInput,
    ListQualificationRequestsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListQualificationRequestsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListQualificationRequestsInput,
    ListQualificationRequestsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListQualificationRequestsInput, ListQualificationRequestsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
