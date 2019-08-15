import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListArtifacts } from "../model/operations/ListArtifacts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListArtifactsInput } from "../types/ListArtifactsInput";
import { ListArtifactsOutput } from "../types/ListArtifactsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListArtifactsInput";
export * from "../types/ListArtifactsOutput";
export * from "../types/ListArtifactsExceptionsUnion";

export class ListArtifactsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListArtifactsInput,
      OutputTypesUnion,
      ListArtifactsOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListArtifacts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListArtifactsInput,
    ListArtifactsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListArtifactsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<ListArtifactsInput, ListArtifactsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListArtifactsInput, ListArtifactsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
