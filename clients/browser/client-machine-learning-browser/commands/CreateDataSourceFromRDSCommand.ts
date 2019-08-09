import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDataSourceFromRDS } from "../model/CreateDataSourceFromRDS";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDataSourceFromRDSInput } from "../types/CreateDataSourceFromRDSInput";
import { CreateDataSourceFromRDSOutput } from "../types/CreateDataSourceFromRDSOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/CreateDataSourceFromRDSInput";
export * from "../types/CreateDataSourceFromRDSOutput";
export * from "../types/CreateDataSourceFromRDSExceptionsUnion";

export class CreateDataSourceFromRDSCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDataSourceFromRDSInput,
      OutputTypesUnion,
      CreateDataSourceFromRDSOutput,
      MachineLearningResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDataSourceFromRDS;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDataSourceFromRDSInput,
    CreateDataSourceFromRDSOutput,
    Blob
  >();

  constructor(readonly input: CreateDataSourceFromRDSInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDataSourceFromRDSInput,
    CreateDataSourceFromRDSOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDataSourceFromRDSInput, CreateDataSourceFromRDSOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
