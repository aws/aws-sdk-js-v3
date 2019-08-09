import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListFragments } from "../model/ListFragments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFragmentsInput } from "../types/ListFragmentsInput";
import { ListFragmentsOutput } from "../types/ListFragmentsOutput";
import { KinesisVideoArchivedMediaResolvedConfiguration } from "../KinesisVideoArchivedMediaConfiguration";
export * from "../types/ListFragmentsInput";
export * from "../types/ListFragmentsOutput";
export * from "../types/ListFragmentsExceptionsUnion";

export class ListFragmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFragmentsInput,
      OutputTypesUnion,
      ListFragmentsOutput,
      KinesisVideoArchivedMediaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListFragments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFragmentsInput,
    ListFragmentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListFragmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisVideoArchivedMediaResolvedConfiguration
  ): __aws_sdk_types.Handler<ListFragmentsInput, ListFragmentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFragmentsInput, ListFragmentsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
