import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCompilationJob } from "../model/CreateCompilationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCompilationJobInput } from "../types/CreateCompilationJobInput";
import { CreateCompilationJobOutput } from "../types/CreateCompilationJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateCompilationJobInput";
export * from "../types/CreateCompilationJobOutput";
export * from "../types/CreateCompilationJobExceptionsUnion";

export class CreateCompilationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCompilationJobInput,
      OutputTypesUnion,
      CreateCompilationJobOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateCompilationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCompilationJobInput,
    CreateCompilationJobOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateCompilationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCompilationJobInput,
    CreateCompilationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCompilationJobInput, CreateCompilationJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
