import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLocation } from "../model/DeleteLocation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLocationInput } from "../types/DeleteLocationInput";
import { DeleteLocationOutput } from "../types/DeleteLocationOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/DeleteLocationInput";
export * from "../types/DeleteLocationOutput";
export * from "../types/DeleteLocationExceptionsUnion";

export class DeleteLocationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLocationInput,
      OutputTypesUnion,
      DeleteLocationOutput,
      DataSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLocation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLocationInput,
    DeleteLocationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLocationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteLocationInput, DeleteLocationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLocationInput, DeleteLocationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
