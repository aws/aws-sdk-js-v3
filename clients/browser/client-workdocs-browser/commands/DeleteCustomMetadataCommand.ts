import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteCustomMetadata } from "../model/operations/DeleteCustomMetadata";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCustomMetadataInput } from "../types/DeleteCustomMetadataInput";
import { DeleteCustomMetadataOutput } from "../types/DeleteCustomMetadataOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DeleteCustomMetadataInput";
export * from "../types/DeleteCustomMetadataOutput";
export * from "../types/DeleteCustomMetadataExceptionsUnion";

export class DeleteCustomMetadataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCustomMetadataInput,
      OutputTypesUnion,
      DeleteCustomMetadataOutput,
      WorkDocsResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteCustomMetadata;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCustomMetadataInput,
    DeleteCustomMetadataOutput,
    Blob
  >();

  constructor(readonly input: DeleteCustomMetadataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCustomMetadataInput,
    DeleteCustomMetadataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCustomMetadataInput, DeleteCustomMetadataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
