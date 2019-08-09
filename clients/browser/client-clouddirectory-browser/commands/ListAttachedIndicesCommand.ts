import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAttachedIndices } from "../model/ListAttachedIndices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAttachedIndicesInput } from "../types/ListAttachedIndicesInput";
import { ListAttachedIndicesOutput } from "../types/ListAttachedIndicesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListAttachedIndicesInput";
export * from "../types/ListAttachedIndicesOutput";
export * from "../types/ListAttachedIndicesExceptionsUnion";

export class ListAttachedIndicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAttachedIndicesInput,
      OutputTypesUnion,
      ListAttachedIndicesOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = ListAttachedIndices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAttachedIndicesInput,
    ListAttachedIndicesOutput,
    Blob
  >();

  constructor(readonly input: ListAttachedIndicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAttachedIndicesInput,
    ListAttachedIndicesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAttachedIndicesInput, ListAttachedIndicesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
