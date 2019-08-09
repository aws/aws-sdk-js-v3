import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { QueryObjects } from "../model/QueryObjects";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { QueryObjectsInput } from "../types/QueryObjectsInput";
import { QueryObjectsOutput } from "../types/QueryObjectsOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/QueryObjectsInput";
export * from "../types/QueryObjectsOutput";
export * from "../types/QueryObjectsExceptionsUnion";

export class QueryObjectsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      QueryObjectsInput,
      OutputTypesUnion,
      QueryObjectsOutput,
      DataPipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = QueryObjects;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    QueryObjectsInput,
    QueryObjectsOutput,
    _stream.Readable
  >();

  constructor(readonly input: QueryObjectsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<QueryObjectsInput, QueryObjectsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<QueryObjectsInput, QueryObjectsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
