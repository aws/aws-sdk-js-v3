import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutFile } from "../model/operations/PutFile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutFileInput } from "../types/PutFileInput";
import { PutFileOutput } from "../types/PutFileOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/PutFileInput";
export * from "../types/PutFileOutput";
export * from "../types/PutFileExceptionsUnion";

export class PutFileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutFileInput,
      OutputTypesUnion,
      PutFileOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = PutFile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutFileInput,
    PutFileOutput,
    Blob
  >();

  constructor(readonly input: PutFileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<PutFileInput, PutFileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutFileInput, PutFileOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
