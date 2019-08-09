import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveTagsFromResource } from "../model/RemoveTagsFromResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveTagsFromResourceInput } from "../types/RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "../types/RemoveTagsFromResourceOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/RemoveTagsFromResourceInput";
export * from "../types/RemoveTagsFromResourceOutput";
export * from "../types/RemoveTagsFromResourceExceptionsUnion";

export class RemoveTagsFromResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveTagsFromResourceInput,
      OutputTypesUnion,
      RemoveTagsFromResourceOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveTagsFromResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveTagsFromResourceInput,
    RemoveTagsFromResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveTagsFromResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveTagsFromResourceInput,
    RemoveTagsFromResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveTagsFromResourceInput, RemoveTagsFromResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
