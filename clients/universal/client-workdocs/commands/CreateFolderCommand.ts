import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFolder } from "../model/CreateFolder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFolderInput } from "../types/CreateFolderInput";
import { CreateFolderOutput } from "../types/CreateFolderOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/CreateFolderInput";
export * from "../types/CreateFolderOutput";
export * from "../types/CreateFolderExceptionsUnion";

export class CreateFolderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFolderInput,
      OutputTypesUnion,
      CreateFolderOutput,
      WorkDocsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateFolder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFolderInput,
    CreateFolderOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateFolderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateFolderInput, CreateFolderOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateFolderInput, CreateFolderOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
