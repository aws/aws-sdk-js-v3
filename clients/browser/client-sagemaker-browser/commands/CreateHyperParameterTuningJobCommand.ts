import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateHyperParameterTuningJob } from "../model/CreateHyperParameterTuningJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateHyperParameterTuningJobInput } from "../types/CreateHyperParameterTuningJobInput";
import { CreateHyperParameterTuningJobOutput } from "../types/CreateHyperParameterTuningJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateHyperParameterTuningJobInput";
export * from "../types/CreateHyperParameterTuningJobOutput";
export * from "../types/CreateHyperParameterTuningJobExceptionsUnion";

export class CreateHyperParameterTuningJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateHyperParameterTuningJobInput,
      OutputTypesUnion,
      CreateHyperParameterTuningJobOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = CreateHyperParameterTuningJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHyperParameterTuningJobInput,
    CreateHyperParameterTuningJobOutput,
    Blob
  >();

  constructor(readonly input: CreateHyperParameterTuningJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateHyperParameterTuningJobInput,
    CreateHyperParameterTuningJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateHyperParameterTuningJobInput,
        CreateHyperParameterTuningJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
