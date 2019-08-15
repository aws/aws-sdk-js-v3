import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListHITs } from "../model/operations/ListHITs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListHITsInput } from "../types/ListHITsInput";
import { ListHITsOutput } from "../types/ListHITsOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/ListHITsInput";
export * from "../types/ListHITsOutput";
export * from "../types/ListHITsExceptionsUnion";

export class ListHITsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListHITsInput,
      OutputTypesUnion,
      ListHITsOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListHITs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListHITsInput,
    ListHITsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListHITsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<ListHITsInput, ListHITsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListHITsInput, ListHITsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
