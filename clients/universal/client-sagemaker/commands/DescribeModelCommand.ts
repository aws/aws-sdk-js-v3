import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeModel } from "../model/DescribeModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeModelInput } from "../types/DescribeModelInput";
import { DescribeModelOutput } from "../types/DescribeModelOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeModelInput";
export * from "../types/DescribeModelOutput";
export * from "../types/DescribeModelExceptionsUnion";

export class DescribeModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeModelInput,
      OutputTypesUnion,
      DescribeModelOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeModelInput,
    DescribeModelOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeModelInput, DescribeModelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeModelInput, DescribeModelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
