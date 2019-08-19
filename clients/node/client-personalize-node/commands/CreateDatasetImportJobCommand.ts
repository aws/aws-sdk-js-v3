import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDatasetImportJob } from "../model/operations/CreateDatasetImportJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDatasetImportJobInput } from "../types/CreateDatasetImportJobInput";
import { CreateDatasetImportJobOutput } from "../types/CreateDatasetImportJobOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/CreateDatasetImportJobInput";
export * from "../types/CreateDatasetImportJobOutput";
export * from "../types/CreateDatasetImportJobExceptionsUnion";

export class CreateDatasetImportJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDatasetImportJobInput,
      OutputTypesUnion,
      CreateDatasetImportJobOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDatasetImportJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDatasetImportJobInput,
    CreateDatasetImportJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDatasetImportJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDatasetImportJobInput,
    CreateDatasetImportJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDatasetImportJobInput, CreateDatasetImportJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
