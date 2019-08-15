import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeResource } from "../model/operations/DescribeResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeResourceInput } from "../types/DescribeResourceInput";
import { DescribeResourceOutput } from "../types/DescribeResourceOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/DescribeResourceInput";
export * from "../types/DescribeResourceOutput";
export * from "../types/DescribeResourceExceptionsUnion";

export class DescribeResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeResourceInput,
      OutputTypesUnion,
      DescribeResourceOutput,
      WorkMailResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeResourceInput,
    DescribeResourceOutput,
    Blob
  >();

  constructor(readonly input: DescribeResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeResourceInput, DescribeResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeResourceInput, DescribeResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
