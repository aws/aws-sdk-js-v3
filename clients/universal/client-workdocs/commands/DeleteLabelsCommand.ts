import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteLabels } from "../model/DeleteLabels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLabelsInput } from "../types/DeleteLabelsInput";
import { DeleteLabelsOutput } from "../types/DeleteLabelsOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DeleteLabelsInput";
export * from "../types/DeleteLabelsOutput";
export * from "../types/DeleteLabelsExceptionsUnion";

export class DeleteLabelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLabelsInput,
      OutputTypesUnion,
      DeleteLabelsOutput,
      WorkDocsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteLabels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLabelsInput,
    DeleteLabelsOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteLabelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteLabelsInput, DeleteLabelsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLabelsInput, DeleteLabelsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
