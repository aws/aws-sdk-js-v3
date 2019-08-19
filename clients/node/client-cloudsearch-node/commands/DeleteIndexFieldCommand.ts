import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteIndexField } from "../model/operations/DeleteIndexField";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIndexFieldInput } from "../types/DeleteIndexFieldInput";
import { DeleteIndexFieldOutput } from "../types/DeleteIndexFieldOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DeleteIndexFieldInput";
export * from "../types/DeleteIndexFieldOutput";
export * from "../types/DeleteIndexFieldExceptionsUnion";

export class DeleteIndexFieldCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIndexFieldInput,
      OutputTypesUnion,
      DeleteIndexFieldOutput,
      CloudSearchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteIndexField;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIndexFieldInput,
    DeleteIndexFieldOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteIndexFieldInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteIndexFieldInput, DeleteIndexFieldOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIndexFieldInput, DeleteIndexFieldOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
