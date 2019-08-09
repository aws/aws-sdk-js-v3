import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSystemInstance } from "../model/DeleteSystemInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSystemInstanceInput } from "../types/DeleteSystemInstanceInput";
import { DeleteSystemInstanceOutput } from "../types/DeleteSystemInstanceOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/DeleteSystemInstanceInput";
export * from "../types/DeleteSystemInstanceOutput";
export * from "../types/DeleteSystemInstanceExceptionsUnion";

export class DeleteSystemInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSystemInstanceInput,
      OutputTypesUnion,
      DeleteSystemInstanceOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteSystemInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSystemInstanceInput,
    DeleteSystemInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSystemInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSystemInstanceInput,
    DeleteSystemInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSystemInstanceInput, DeleteSystemInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
