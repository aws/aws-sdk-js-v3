import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRepositories } from "../model/DescribeRepositories";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRepositoriesInput } from "../types/DescribeRepositoriesInput";
import { DescribeRepositoriesOutput } from "../types/DescribeRepositoriesOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/DescribeRepositoriesInput";
export * from "../types/DescribeRepositoriesOutput";
export * from "../types/DescribeRepositoriesExceptionsUnion";

export class DescribeRepositoriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRepositoriesInput,
      OutputTypesUnion,
      DescribeRepositoriesOutput,
      ECRResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeRepositories;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRepositoriesInput,
    DescribeRepositoriesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeRepositoriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRepositoriesInput,
    DescribeRepositoriesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRepositoriesInput, DescribeRepositoriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
