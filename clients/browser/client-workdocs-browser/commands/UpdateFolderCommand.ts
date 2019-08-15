import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFolder } from "../model/operations/UpdateFolder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFolderInput } from "../types/UpdateFolderInput";
import { UpdateFolderOutput } from "../types/UpdateFolderOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/UpdateFolderInput";
export * from "../types/UpdateFolderOutput";
export * from "../types/UpdateFolderExceptionsUnion";

export class UpdateFolderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFolderInput,
      OutputTypesUnion,
      UpdateFolderOutput,
      WorkDocsResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateFolder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFolderInput,
    UpdateFolderOutput,
    Blob
  >();

  constructor(readonly input: UpdateFolderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateFolderInput, UpdateFolderOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFolderInput, UpdateFolderOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
