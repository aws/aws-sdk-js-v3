import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteInstance } from "../model/DeleteInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteInstanceInput } from "../types/DeleteInstanceInput";
import { DeleteInstanceOutput } from "../types/DeleteInstanceOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DeleteInstanceInput";
export * from "../types/DeleteInstanceOutput";
export * from "../types/DeleteInstanceExceptionsUnion";

export class DeleteInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteInstanceInput,
      OutputTypesUnion,
      DeleteInstanceOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteInstanceInput,
    DeleteInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteInstanceInput, DeleteInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteInstanceInput, DeleteInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
