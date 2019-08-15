import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListFragments } from "../model/operations/ListFragments";
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
      Blob
    > {
  readonly model = ListFragments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFragmentsInput,
    ListFragmentsOutput,
    Blob
  >();

  constructor(readonly input: ListFragmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
