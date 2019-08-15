import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteComponent } from "../model/operations/DeleteComponent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteComponentInput } from "../types/DeleteComponentInput";
import { DeleteComponentOutput } from "../types/DeleteComponentOutput";
import { ApplicationInsightsResolvedConfiguration } from "../ApplicationInsightsConfiguration";
export * from "../types/DeleteComponentInput";
export * from "../types/DeleteComponentOutput";
export * from "../types/DeleteComponentExceptionsUnion";

export class DeleteComponentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteComponentInput,
      OutputTypesUnion,
      DeleteComponentOutput,
      ApplicationInsightsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteComponent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteComponentInput,
    DeleteComponentOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteComponentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationInsightsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteComponentInput, DeleteComponentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteComponentInput, DeleteComponentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
