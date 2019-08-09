import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCodeRepository } from "../model/DescribeCodeRepository";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCodeRepositoryInput } from "../types/DescribeCodeRepositoryInput";
import { DescribeCodeRepositoryOutput } from "../types/DescribeCodeRepositoryOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeCodeRepositoryInput";
export * from "../types/DescribeCodeRepositoryOutput";
export * from "../types/DescribeCodeRepositoryExceptionsUnion";

export class DescribeCodeRepositoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCodeRepositoryInput,
      OutputTypesUnion,
      DescribeCodeRepositoryOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeCodeRepository;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCodeRepositoryInput,
    DescribeCodeRepositoryOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeCodeRepositoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCodeRepositoryInput,
    DescribeCodeRepositoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCodeRepositoryInput, DescribeCodeRepositoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
