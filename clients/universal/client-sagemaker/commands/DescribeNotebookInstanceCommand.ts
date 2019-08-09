import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeNotebookInstance } from "../model/DescribeNotebookInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNotebookInstanceInput } from "../types/DescribeNotebookInstanceInput";
import { DescribeNotebookInstanceOutput } from "../types/DescribeNotebookInstanceOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeNotebookInstanceInput";
export * from "../types/DescribeNotebookInstanceOutput";
export * from "../types/DescribeNotebookInstanceExceptionsUnion";

export class DescribeNotebookInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNotebookInstanceInput,
      OutputTypesUnion,
      DescribeNotebookInstanceOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeNotebookInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNotebookInstanceInput,
    DescribeNotebookInstanceOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeNotebookInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNotebookInstanceInput,
    DescribeNotebookInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeNotebookInstanceInput, DescribeNotebookInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
