import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListObjectParents } from "../model/operations/ListObjectParents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListObjectParentsInput } from "../types/ListObjectParentsInput";
import { ListObjectParentsOutput } from "../types/ListObjectParentsOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListObjectParentsInput";
export * from "../types/ListObjectParentsOutput";
export * from "../types/ListObjectParentsExceptionsUnion";

export class ListObjectParentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListObjectParentsInput,
      OutputTypesUnion,
      ListObjectParentsOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListObjectParents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListObjectParentsInput,
    ListObjectParentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListObjectParentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<ListObjectParentsInput, ListObjectParentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListObjectParentsInput, ListObjectParentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
