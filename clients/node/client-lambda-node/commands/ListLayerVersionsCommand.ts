import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListLayerVersions } from "../model/operations/ListLayerVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLayerVersionsInput } from "../types/ListLayerVersionsInput";
import { ListLayerVersionsOutput } from "../types/ListLayerVersionsOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/ListLayerVersionsInput";
export * from "../types/ListLayerVersionsOutput";
export * from "../types/ListLayerVersionsExceptionsUnion";

export class ListLayerVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLayerVersionsInput,
      OutputTypesUnion,
      ListLayerVersionsOutput,
      LambdaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListLayerVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLayerVersionsInput,
    ListLayerVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListLayerVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<ListLayerVersionsInput, ListLayerVersionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListLayerVersionsInput, ListLayerVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
