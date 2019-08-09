import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListObjectChildren } from "../model/ListObjectChildren";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListObjectChildrenInput } from "../types/ListObjectChildrenInput";
import { ListObjectChildrenOutput } from "../types/ListObjectChildrenOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListObjectChildrenInput";
export * from "../types/ListObjectChildrenOutput";
export * from "../types/ListObjectChildrenExceptionsUnion";

export class ListObjectChildrenCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListObjectChildrenInput,
      OutputTypesUnion,
      ListObjectChildrenOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = ListObjectChildren;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListObjectChildrenInput,
    ListObjectChildrenOutput,
    Blob
  >();

  constructor(readonly input: ListObjectChildrenInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListObjectChildrenInput,
    ListObjectChildrenOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListObjectChildrenInput, ListObjectChildrenOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
