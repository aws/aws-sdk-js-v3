import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDatasetGroup } from "../model/DeleteDatasetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDatasetGroupInput } from "../types/DeleteDatasetGroupInput";
import { DeleteDatasetGroupOutput } from "../types/DeleteDatasetGroupOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DeleteDatasetGroupInput";
export * from "../types/DeleteDatasetGroupOutput";
export * from "../types/DeleteDatasetGroupExceptionsUnion";

export class DeleteDatasetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDatasetGroupInput,
      OutputTypesUnion,
      DeleteDatasetGroupOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDatasetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDatasetGroupInput,
    DeleteDatasetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDatasetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDatasetGroupInput,
    DeleteDatasetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDatasetGroupInput, DeleteDatasetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
