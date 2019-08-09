import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDataset } from "../model/DeleteDataset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDatasetInput } from "../types/DeleteDatasetInput";
import { DeleteDatasetOutput } from "../types/DeleteDatasetOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DeleteDatasetInput";
export * from "../types/DeleteDatasetOutput";
export * from "../types/DeleteDatasetExceptionsUnion";

export class DeleteDatasetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDatasetInput,
      OutputTypesUnion,
      DeleteDatasetOutput,
      PersonalizeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDataset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDatasetInput,
    DeleteDatasetOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDatasetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDatasetInput, DeleteDatasetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDatasetInput, DeleteDatasetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
