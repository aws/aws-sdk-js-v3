import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ImportSourceCredentials } from "../model/ImportSourceCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportSourceCredentialsInput } from "../types/ImportSourceCredentialsInput";
import { ImportSourceCredentialsOutput } from "../types/ImportSourceCredentialsOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/ImportSourceCredentialsInput";
export * from "../types/ImportSourceCredentialsOutput";
export * from "../types/ImportSourceCredentialsExceptionsUnion";

export class ImportSourceCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportSourceCredentialsInput,
      OutputTypesUnion,
      ImportSourceCredentialsOutput,
      CodeBuildResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ImportSourceCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportSourceCredentialsInput,
    ImportSourceCredentialsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ImportSourceCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ImportSourceCredentialsInput,
    ImportSourceCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportSourceCredentialsInput, ImportSourceCredentialsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
