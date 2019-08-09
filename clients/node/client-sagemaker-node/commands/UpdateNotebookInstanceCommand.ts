import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateNotebookInstance } from "../model/UpdateNotebookInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateNotebookInstanceInput } from "../types/UpdateNotebookInstanceInput";
import { UpdateNotebookInstanceOutput } from "../types/UpdateNotebookInstanceOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/UpdateNotebookInstanceInput";
export * from "../types/UpdateNotebookInstanceOutput";
export * from "../types/UpdateNotebookInstanceExceptionsUnion";

export class UpdateNotebookInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateNotebookInstanceInput,
      OutputTypesUnion,
      UpdateNotebookInstanceOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateNotebookInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateNotebookInstanceInput,
    UpdateNotebookInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateNotebookInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateNotebookInstanceInput,
    UpdateNotebookInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateNotebookInstanceInput, UpdateNotebookInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
