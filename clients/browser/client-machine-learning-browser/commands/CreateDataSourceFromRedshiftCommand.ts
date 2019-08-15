import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDataSourceFromRedshift } from "../model/operations/CreateDataSourceFromRedshift";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDataSourceFromRedshiftInput } from "../types/CreateDataSourceFromRedshiftInput";
import { CreateDataSourceFromRedshiftOutput } from "../types/CreateDataSourceFromRedshiftOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/CreateDataSourceFromRedshiftInput";
export * from "../types/CreateDataSourceFromRedshiftOutput";
export * from "../types/CreateDataSourceFromRedshiftExceptionsUnion";

export class CreateDataSourceFromRedshiftCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDataSourceFromRedshiftInput,
      OutputTypesUnion,
      CreateDataSourceFromRedshiftOutput,
      MachineLearningResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDataSourceFromRedshift;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDataSourceFromRedshiftInput,
    CreateDataSourceFromRedshiftOutput,
    Blob
  >();

  constructor(readonly input: CreateDataSourceFromRedshiftInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDataSourceFromRedshiftInput,
    CreateDataSourceFromRedshiftOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDataSourceFromRedshiftInput,
        CreateDataSourceFromRedshiftOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
