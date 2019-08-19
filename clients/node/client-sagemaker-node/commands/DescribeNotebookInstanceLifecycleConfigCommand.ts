import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeNotebookInstanceLifecycleConfig } from "../model/operations/DescribeNotebookInstanceLifecycleConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNotebookInstanceLifecycleConfigInput } from "../types/DescribeNotebookInstanceLifecycleConfigInput";
import { DescribeNotebookInstanceLifecycleConfigOutput } from "../types/DescribeNotebookInstanceLifecycleConfigOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeNotebookInstanceLifecycleConfigInput";
export * from "../types/DescribeNotebookInstanceLifecycleConfigOutput";
export * from "../types/DescribeNotebookInstanceLifecycleConfigExceptionsUnion";

export class DescribeNotebookInstanceLifecycleConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNotebookInstanceLifecycleConfigInput,
      OutputTypesUnion,
      DescribeNotebookInstanceLifecycleConfigOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeNotebookInstanceLifecycleConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNotebookInstanceLifecycleConfigInput,
    DescribeNotebookInstanceLifecycleConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeNotebookInstanceLifecycleConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNotebookInstanceLifecycleConfigInput,
    DescribeNotebookInstanceLifecycleConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeNotebookInstanceLifecycleConfigInput,
        DescribeNotebookInstanceLifecycleConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
