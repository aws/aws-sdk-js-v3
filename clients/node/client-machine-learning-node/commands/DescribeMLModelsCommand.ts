import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeMLModels } from "../model/operations/DescribeMLModels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMLModelsInput } from "../types/DescribeMLModelsInput";
import { DescribeMLModelsOutput } from "../types/DescribeMLModelsOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/DescribeMLModelsInput";
export * from "../types/DescribeMLModelsOutput";
export * from "../types/DescribeMLModelsExceptionsUnion";

export class DescribeMLModelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMLModelsInput,
      OutputTypesUnion,
      DescribeMLModelsOutput,
      MachineLearningResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeMLModels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMLModelsInput,
    DescribeMLModelsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeMLModelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeMLModelsInput, DescribeMLModelsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeMLModelsInput, DescribeMLModelsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
