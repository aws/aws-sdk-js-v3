import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateImportJob } from "../model/operations/CreateImportJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateImportJobInput } from "../types/CreateImportJobInput";
import { CreateImportJobOutput } from "../types/CreateImportJobOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/CreateImportJobInput";
export * from "../types/CreateImportJobOutput";
export * from "../types/CreateImportJobExceptionsUnion";

export class CreateImportJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateImportJobInput,
      OutputTypesUnion,
      CreateImportJobOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = CreateImportJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateImportJobInput,
    CreateImportJobOutput,
    Blob
  >();

  constructor(readonly input: CreateImportJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateImportJobInput, CreateImportJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateImportJobInput, CreateImportJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
