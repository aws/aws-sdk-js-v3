import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteNamedQuery } from "../model/operations/DeleteNamedQuery";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNamedQueryInput } from "../types/DeleteNamedQueryInput";
import { DeleteNamedQueryOutput } from "../types/DeleteNamedQueryOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/DeleteNamedQueryInput";
export * from "../types/DeleteNamedQueryOutput";
export * from "../types/DeleteNamedQueryExceptionsUnion";

export class DeleteNamedQueryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNamedQueryInput,
      OutputTypesUnion,
      DeleteNamedQueryOutput,
      AthenaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteNamedQuery;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNamedQueryInput,
    DeleteNamedQueryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteNamedQueryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteNamedQueryInput, DeleteNamedQueryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteNamedQueryInput, DeleteNamedQueryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
